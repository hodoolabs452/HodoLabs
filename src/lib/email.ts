import nodemailer from "nodemailer";

export interface ContactEmailPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface EmailResult {
  success: boolean;
  delivered: boolean;
  messageId?: string;
  error?: string;
  provider?: string;
}

const RECIPIENT_EMAIL = process.env.EMAIL_TO || "hello@hodoolabs.com";
const SENDER_EMAIL = process.env.EMAIL_FROM || "HodoLabs <onboarding@resend.dev>";

export async function sendContactEmail(payload: ContactEmailPayload): Promise<EmailResult> {
  const { name, email, subject = "General Inquiry", message } = payload;
  const timestamp = new Date().toISOString();
  const emailSubject = `[HodoLabs Website Inquiry] ${subject}`;

  const textBody = `
New inquiry submitted via HodoLabs Website Contact Form:
-------------------------------------------------------
Sender Name:    ${name}
Sender Email:   ${email}
Subject:        ${subject}
Submitted At:   ${timestamp}
-------------------------------------------------------
Message:
${message}
-------------------------------------------------------
Recipient: ${RECIPIENT_EMAIL}
`.trim();

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; padding: 24px; margin: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
    .header { background: #4f46e5; color: #ffffff; padding: 24px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.9; }
    .body { padding: 24px; line-height: 1.6; font-size: 14px; }
    .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; background: #f1f5f9; border-radius: 8px; }
    .meta-table td { padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-size: 13px; }
    .meta-label { font-weight: 600; color: #475569; width: 120px; }
    .meta-value { color: #0f172a; }
    .message-box { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; white-space: pre-wrap; font-size: 14px; color: #1e293b; }
    .footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>HodoLabs &bull; Website Inquiry</h1>
      <p>A new message has been submitted via hodoolabs.com</p>
    </div>
    <div class="body">
      <table class="meta-table">
        <tr>
          <td class="meta-label">Full Name</td>
          <td class="meta-value"><strong>${escapeHtml(name)}</strong></td>
        </tr>
        <tr>
          <td class="meta-label">Email Address</td>
          <td class="meta-value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td class="meta-label">Subject</td>
          <td class="meta-value">${escapeHtml(subject)}</td>
        </tr>
        <tr>
          <td class="meta-label">Submitted At</td>
          <td class="meta-value">${timestamp}</td>
        </tr>
      </table>

      <h3 style="margin-top: 24px; margin-bottom: 8px; font-size: 14px; color: #334155;">Message:</h3>
      <div class="message-box">${escapeHtml(message)}</div>
    </div>
    <div class="footer">
      Sent to ${RECIPIENT_EMAIL} &bull; HodoLabs Official Website
    </div>
  </div>
</body>
</html>
`.trim();

  // 1. Resend Provider (Recommended for Next.js on Vercel)
  const resendKey = process.env.RESEND_API_KEY || (process.env.EMAIL_API_KEY?.startsWith("re_") ? process.env.EMAIL_API_KEY : undefined);
  if (resendKey) {
    console.log(`[Email:Resend] Provider active. Dispatching inquiry to ${RECIPIENT_EMAIL}...`);
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: SENDER_EMAIL,
          to: [RECIPIENT_EMAIL],
          reply_to: email,
          subject: emailSubject,
          text: textBody,
          html: htmlBody,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error(`[Email:Resend] Provider returned HTTP ${response.status}:`, errorData?.message || "Unknown error");
        return {
          success: false,
          delivered: false,
          provider: "resend",
          error: errorData?.message || `Resend delivery failed with status ${response.status}`,
        };
      }

      const data = await response.json();
      console.log(`[Email:Resend] Delivered successfully. Message ID: ${data?.id}`);
      return {
        success: true,
        delivered: true,
        provider: "resend",
        messageId: data?.id,
      };
    } catch (err: unknown) {
      const messageText = err instanceof Error ? err.message : "Failed to connect to Resend API";
      console.error("[Email:Resend] Network exception:", messageText);
      return {
        success: false,
        delivered: false,
        provider: "resend",
        error: messageText,
      };
    }
  }

  // 2. SMTP Provider (Google Workspace, Zoho, Microsoft 365, Amazon SES, Custom SMTP)
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
  if (smtpHost && smtpUser && smtpPass) {
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    console.log(`[Email:SMTP] Provider active. Dispatching via ${smtpHost}:${port} to ${RECIPIENT_EMAIL}...`);

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port,
        secure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM || `"HodoLabs" <${smtpUser}>`,
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: emailSubject,
        text: textBody,
        html: htmlBody,
      });

      console.log(`[Email:SMTP] Delivered successfully. Message ID: ${info.messageId}`);
      return {
        success: true,
        delivered: true,
        provider: "smtp",
        messageId: info.messageId,
      };
    } catch (err: unknown) {
      const messageText = err instanceof Error ? err.message : "SMTP delivery failed";
      console.error("[Email:SMTP] Delivery exception:", messageText);
      return {
        success: false,
        delivered: false,
        provider: "smtp",
        error: messageText,
      };
    }
  }

  // 3. SendGrid Provider
  const sendgridKey = process.env.SENDGRID_API_KEY;
  if (sendgridKey) {
    console.log(`[Email:SendGrid] Provider active. Dispatching to ${RECIPIENT_EMAIL}...`);
    try {
      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${sendgridKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: RECIPIENT_EMAIL }] }],
          from: { email: SENDER_EMAIL.includes("<") ? SENDER_EMAIL.split("<")[1].replace(">", "").trim() : SENDER_EMAIL },
          reply_to: { email },
          subject: emailSubject,
          content: [
            { type: "text/plain", value: textBody },
            { type: "text/html", value: htmlBody },
          ],
        }),
      });

      if (!response.ok) {
        const errText = await response.text().catch(() => "");
        console.error(`[Email:SendGrid] Provider returned HTTP ${response.status}:`, errText);
        return { success: false, delivered: false, provider: "sendgrid", error: errText || `SendGrid returned status ${response.status}` };
      }

      console.log("[Email:SendGrid] Delivered successfully.");
      return { success: true, delivered: true, provider: "sendgrid" };
    } catch (err: unknown) {
      const messageText = err instanceof Error ? err.message : "SendGrid network error";
      console.error("[Email:SendGrid] Network exception:", messageText);
      return { success: false, delivered: false, provider: "sendgrid", error: messageText };
    }
  }

  // 4. Postmark Provider
  const postmarkToken = process.env.POSTMARK_SERVER_TOKEN;
  if (postmarkToken) {
    console.log(`[Email:Postmark] Provider active. Dispatching to ${RECIPIENT_EMAIL}...`);
    try {
      const response = await fetch("https://api.postmarkapp.com/email", {
        method: "POST",
        headers: {
          "X-Postmark-Server-Token": postmarkToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          From: SENDER_EMAIL,
          To: RECIPIENT_EMAIL,
          ReplyTo: email,
          Subject: emailSubject,
          TextBody: textBody,
          HtmlBody: htmlBody,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error(`[Email:Postmark] Provider returned HTTP ${response.status}:`, errorData?.Message || "Unknown error");
        return { success: false, delivered: false, provider: "postmark", error: errorData?.Message || `Postmark status ${response.status}` };
      }

      console.log("[Email:Postmark] Delivered successfully.");
      return { success: true, delivered: true, provider: "postmark" };
    } catch (err: unknown) {
      const messageText = err instanceof Error ? err.message : "Postmark network error";
      console.error("[Email:Postmark] Network exception:", messageText);
      return { success: false, delivered: false, provider: "postmark", error: messageText };
    }
  }

  // 5. No active email provider configured in environment variables
  console.error(`[Email:Config] FAILURE: No email delivery credentials found in environment.`);
  console.error(`[Email:Config] Checked variables: RESEND_API_KEY (${Boolean(resendKey)}), SMTP_HOST (${Boolean(smtpHost)}), SENDGRID_API_KEY (${Boolean(sendgridKey)}), POSTMARK_SERVER_TOKEN (${Boolean(postmarkToken)}).`);
  console.error(`[Email:Config] Message from ${name} <${email}> intended for ${RECIPIENT_EMAIL} could not be delivered.`);

  return {
    success: false,
    delivered: false,
    provider: "none",
    error: "Email delivery service is currently not configured on the server. Please contact hello@hodoolabs.com directly.",
  };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
