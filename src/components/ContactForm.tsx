"use client";

import { useState } from "react";
import { CheckCircle2, Send, Mail, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean client-side submission & preparation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const mailtoHref = `mailto:hello@hodoolabs.com?subject=${encodeURIComponent(
    formData.subject || "Inquiry for HodoLabs"
  )}&body=${encodeURIComponent(
    `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Message Prepared Successfully
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out, <span className="font-semibold text-slate-900">{formData.name}</span>!
            We have prepared your message for our team at <span className="font-semibold text-indigo-600">hello@hodoolabs.com</span>.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <Mail className="h-4 w-4" />
              <span>Send via your email client</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Send another note
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Morgan"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-rose-300 focus:ring-rose-500/20"
                    : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/15"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-rose-300 focus:ring-rose-500/20"
                    : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/15"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Subject <span className="text-rose-500">*</span>
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="e.g. Partnership inquiry, curriculum feedback, or product question"
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                errors.subject
                  ? "border-rose-300 focus:ring-rose-500/20"
                  : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/15"
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your questions, organization, or ideas..."
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-rose-300 focus:ring-rose-500/20"
                  : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-600/15"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
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
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-md disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Validating...</span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <span>Direct inquiries:</span>
              <a
                href="mailto:hello@hodoolabs.com"
                className="font-semibold text-indigo-600 hover:underline"
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
