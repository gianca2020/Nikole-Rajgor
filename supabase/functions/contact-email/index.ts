import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400, headers: corsHeaders }
      );
    }

  const result = await resend.emails.send({
  from: "Contact Form <onboarding@resend.dev>",
  to: ["giancarloforero@gmail.com"], // EXACT Resend account email
  subject: "New Contact Form Message",
  html: `<p>Test email</p>`,
});


console.log("Resend response:", result);


    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    console.error("Email error:", err);

    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500, headers: corsHeaders }
    );
  }
});
