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

  // 1. Resend Provider (Default Recommended Provider for Next.js)
  const resendKey = process.env.RESEND_API_KEY || (process.env.EMAIL_API_KEY?.startsWith("re_") ? process.env.EMAIL_API_KEY : undefined);
  if (resendKey) {
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
        console.error("[Email:Resend] Delivery failed:", errorData);
        return {
          success: false,
          delivered: false,
          provider: "resend",
          error: errorData.message || `Resend responded with status ${response.status}`,
        };
      }

      const data = await response.json();
      return {
        success: true,
        delivered: true,
        provider: "resend",
        messageId: data.id,
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to reach Resend API";
      console.error("[Email:Resend] Network error:", message);
      return {
        success: false,
        delivered: false,
        provider: "resend",
        error: message,
      };
    }
  }

  // 2. SendGrid Provider
  const sendgridKey = process.env.SENDGRID_API_KEY;
  if (sendgridKey) {
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
        return { success: false, delivered: false, provider: "sendgrid", error: errText };
      }

      return { success: true, delivered: true, provider: "sendgrid" };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "SendGrid network error";
      return { success: false, delivered: false, provider: "sendgrid", error: message };
    }
  }

  // 3. Postmark Provider
  const postmarkToken = process.env.POSTMARK_SERVER_TOKEN;
  if (postmarkToken) {
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
        return { success: false, delivered: false, provider: "postmark", error: errorData.Message };
      }

      return { success: true, delivered: true, provider: "postmark" };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Postmark network error";
      return { success: false, delivered: false, provider: "postmark", error: message };
    }
  }

  // 4. Development Fallback
  console.log(`\n======================================================`);
  console.log(`[HODOOLABS WEBSITE CONTACT SUBMISSION TO: ${RECIPIENT_EMAIL}]`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Subject: ${subject}`);
  console.log(`Message:\n${message}`);
  console.log(`Notice: To deliver live emails to ${RECIPIENT_EMAIL}, set RESEND_API_KEY in your Vercel or environment variables.`);
  console.log(`======================================================\n`);

  return {
    success: true,
    delivered: false,
    provider: "local-log",
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
