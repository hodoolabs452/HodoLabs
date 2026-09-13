import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  console.log("[API:Contact] Processing new contact form submission...");

  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      console.warn("[API:Contact] Validation failed: Empty or malformed JSON payload.");
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { name, email, subject, message, hp } = body;

    // 1. Anti-spam honeypot check: If the hidden honeypot field has a value, silently drop
    if (hp) {
      console.warn("[API:Contact] Honeypot triggered. Silently dropping bot submission.");
      return NextResponse.json({
        success: true,
        message: "Your message has been received.",
      });
    }

    // 2. Field Validations
    if (!name || typeof name !== "string" || !name.trim()) {
      console.warn("[API:Contact] Validation failed: Missing name.");
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      console.warn("[API:Contact] Validation failed: Missing email.");
      return NextResponse.json(
        { success: false, error: "Please enter your email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      console.warn("[API:Contact] Validation failed: Invalid email format.");
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || !subject.trim()) {
      console.warn("[API:Contact] Validation failed: Missing subject.");
      return NextResponse.json(
        { success: false, error: "Please provide a subject for your inquiry." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      console.warn("[API:Contact] Validation failed: Missing message.");
      return NextResponse.json(
        { success: false, error: "Please enter your message." },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      console.warn("[API:Contact] Validation failed: Message shorter than 10 characters.");
      return NextResponse.json(
        { success: false, error: "Your message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    console.log(`[API:Contact] Validation passed for sender "${name.trim()}". Requesting email delivery...`);

    // 3. Dispatch email to hello@hodoolabs.com
    const result = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    console.log(`[API:Contact] Delivery result: delivered=${result.delivered}, provider=${result.provider || "none"}`);

    if (!result.success || !result.delivered) {
      console.error(`[API:Contact] Delivery failure reported: ${result.error}`);
      return NextResponse.json(
        {
          success: false,
          error: result.error || "Failed to deliver email. Please try again or email hello@hodoolabs.com directly.",
        },
        { status: 500 }
      );
    }

    console.log("[API:Contact] Returning HTTP 200 success response to client.");
    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent to hello@hodoolabs.com. We will respond shortly.",
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    console.error("[API:Contact] Unexpected server exception:", errorMessage);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please contact hello@hodoolabs.com directly." },
      { status: 500 }
    );
  }
}
