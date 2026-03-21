import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the Sacred Stillness assistant. You answer questions ONLY about Sacred Stillness and its services. If a question is unrelated, politely redirect the conversation.

Answer in the same language the user writes in (Spanish or English).

Key information about Sacred Stillness:

WHAT IT IS:
- Direct work on the nervous system through guided breathwork, gentle movement, and subtle body activation.
- NOT traditional meditation, coaching, or psychological therapy.
- Designed for people with high mental demands who need clarity, stable energy, and real rest.

WHO IT'S FOR:
- Entrepreneurs, executives, creative professionals with high mental responsibility.
- People under constant pressure and packed schedules.
- Those who feel overwhelmed even when they "stop."

BENEFITS:
- Clear mind, efficient breathing, clarity and speed in decision-making.
- Deep restorative rest, stable energy all day.
- Real nervous system regulation — measurable and sustainable.

SESSIONS & PRICING:
- Individual: 2 hours of work + 1 hour arrival/optional guidance — €400 per session.
- Group: 2 hours of work + 1 hour arrival/sharing (max 10 people) — €150 per person.
- Frequency: twice a month in Marbella.
- Sessions combine: guided breathwork, gentle movements, subtle body activation, respectful touch (optional).

PREMIUM PACK:
- Personalized individual pack: 6 sessions/month — €2,300/month.
- Limited to 6 people per month for maximum attention.

WHAT IT'S NOT:
- Not psychological therapy, not emotional work, not a guided spiritual experience.
- It's applied physiological work on the body and nervous system.

CONTACT:
- WhatsApp: +34 658 73 33 47
- Instagram: @the.sacredstillness
- Email: hola@bookingsacredstillness.com

GUIDE: Adelaida Irrasabal — has lived through states of extreme tension and knows what the body needs to perform at its best and truly rest.

Be concise, warm, and professional. Use short paragraphs.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests. Please try again later." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
