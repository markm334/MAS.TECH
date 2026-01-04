import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import nodemailer from "npm:nodemailer";

serve(async (req) => {
  // Basic CORS handling
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-client-info, apikey, x-supabase-auth",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    console.log('Received body:', body);
    const { name, email, reason, message } = body;

    // Get SMTP credentials from environment variables, with fallbacks
    const SMTP_USER = Deno.env.get("SMTP_USER") || "mas.assistive@gmail.com";
    const SMTP_PASS = Deno.env.get("SMTP_PASS") || "gaxd esvj mmuv lwpk";

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Email content
    // For deliverability, it's safer to keep `from` as the verified SMTP_USER
    // and set `replyTo` to the user-provided email. If you explicitly want
    // the `from` header to be the user's email, set the runtime secret
    // ALLOW_FROM_USER=true in Supabase (may be rejected by some SMTP providers).
    const ALLOW_FROM_USER = Deno.env.get("ALLOW_FROM_USER") === "true";

    const mailOptions: any = {
      from: ALLOW_FROM_USER ? `${name} <${email}>` : `"MAS Contact Form" <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: `${name} <${email}>`,
      subject: `Contact Form Submission - ${reason}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>This email was sent from the MAS Assistive website contact form.</small></p>
      `,
    };

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent info:', info);
      return new Response(JSON.stringify({ success: true, info }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (sendErr) {
      console.error('Error in transporter.sendMail:', sendErr);
      return new Response(JSON.stringify({ error: 'send_failed', message: String(sendErr), stack: sendErr?.stack }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: 'handler_error', message: error?.message || String(error), stack: error?.stack }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
