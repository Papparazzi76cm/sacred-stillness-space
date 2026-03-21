import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useLanguage } from "@/contexts/LanguageContext";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const ChatWidget = () => {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const placeholder = lang === "es" ? "Pregunta sobre Sacred Stillness…" : "Ask about Sacred Stillness…";
  const greeting = lang === "es"
    ? "Hola 👋 Soy el asistente de Sacred Stillness. ¿En qué puedo ayudarte?"
    : "Hi 👋 I'm the Sacred Stillness assistant. How can I help you?";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Msg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!resp.ok || !resp.body) {
        throw new Error("Stream failed");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantSoFar += content;
              const current = assistantSoFar;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant") {
                  return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: current } : m));
                }
                return [...prev, { role: "assistant", content: current }];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: lang === "es" ? "Lo siento, hubo un error. Intenta de nuevo." : "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold text-foreground shadow-lg flex items-center justify-center hover:bg-gold-light transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[480px] flex flex-col rounded-2xl border border-border bg-background shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border bg-foreground">
              <p className="font-display text-sm font-light text-primary-foreground tracking-wide">Sacred Stillness</p>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">Assistant</p>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[200px] max-h-[320px]">
              {/* Greeting */}
              <div className="bg-secondary rounded-xl rounded-tl-sm px-4 py-3">
                <p className="font-body text-sm text-foreground/80 leading-relaxed">{greeting}</p>
              </div>

              {messages.map((msg, i) => (
                <div key={i} className={msg.role === "user" ? "flex justify-end" : ""}>
                  <div
                    className={
                      msg.role === "user"
                        ? "bg-gold text-foreground rounded-xl rounded-br-sm px-4 py-3 max-w-[85%]"
                        : "bg-secondary rounded-xl rounded-tl-sm px-4 py-3 max-w-[85%]"
                    }
                  >
                    {msg.role === "assistant" ? (
                      <div className="font-body text-sm text-foreground/80 leading-relaxed prose prose-sm max-w-none [&_p]:mb-1 [&_p:last-child]:mb-0">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="font-body text-sm leading-relaxed">{msg.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="bg-secondary rounded-xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-gold/60 animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 rounded-full bg-gold/60 animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 rounded-full bg-gold/60 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="flex items-center gap-2 px-4 py-3 border-t border-border"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
                className="flex-1 bg-transparent font-body text-sm text-foreground placeholder:text-muted-foreground outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="text-gold hover:text-gold-light disabled:opacity-30 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
