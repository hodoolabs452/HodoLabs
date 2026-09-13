"use client";

import { useState } from "react";
import { CheckCircle2, Send, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    hp: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Please provide a subject.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Your message should be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          hp: formData.hp,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to deliver message. Please email hello@hodoolabs.com directly.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please contact hello@hodoolabs.com directly.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] p-6 sm:p-8 md:p-10 shadow-sm transition-colors">
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Message Sent Successfully
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out, <span className="font-semibold text-slate-900 dark:text-slate-200">{formData.name}</span>!
            Your inquiry has been delivered to our team at <span className="font-semibold text-indigo-600 dark:text-indigo-400">hello@hodoolabs.com</span>. We review all messages thoughtfully and will respond shortly.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", subject: "", message: "", hp: "" });
                setSubmitError(null);
                setErrors({});
              }}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Send another note
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot field */}
          <input
            type="text"
            name="company_url"
            value={formData.hp}
            onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", opacity: 0 }}
          />

          {submitError && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
              <span className="text-sm leading-relaxed">{submitError}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                disabled={isSubmitting}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Morgan"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-[#111927] placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 disabled:opacity-50 ${
                  errors.name
                    ? "border-rose-300 dark:border-rose-700 focus:ring-rose-500/20"
                    : "border-slate-300 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-indigo-600/15"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                disabled={isSubmitting}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-[#111927] placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 disabled:opacity-50 ${
                  errors.email
                    ? "border-rose-300 dark:border-rose-700 focus:ring-rose-500/20"
                    : "border-slate-300 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-indigo-600/15"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Subject <span className="text-rose-500">*</span>
            </label>
            <input
              id="subject"
              type="text"
              disabled={isSubmitting}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="e.g. Partnership inquiry, curriculum feedback, or product question"
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-[#111927] placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 disabled:opacity-50 ${
                errors.subject
                  ? "border-rose-300 dark:border-rose-700 focus:ring-rose-500/20"
                  : "border-slate-300 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-indigo-600/15"
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              disabled={isSubmitting}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your questions, organization, or ideas..."
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-[#111927] placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 disabled:opacity-50 ${
                errors.message
                  ? "border-rose-300 dark:border-rose-700 focus:ring-rose-500/20"
                  : "border-slate-300 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-indigo-600/15"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-md disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <span>Direct inquiries:</span>
              <a
                href="mailto:hello@hodoolabs.com"
                className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                hello@hodoolabs.com
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
