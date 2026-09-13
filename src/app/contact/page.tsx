import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact HodoLabs",
  description:
    "Have a question, idea or partnership opportunity? Connect with the HodoLabs team.",
  alternates: {
    canonical: "https://hodoolabs.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-20 bg-radial-[at_top] from-indigo-50/50 dark:from-indigo-950/30 via-white dark:via-[#090d16] to-white dark:to-[#090d16] border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-md">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Let&apos;s Connect
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a question, idea or partnership opportunity? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-slate-50/50 dark:bg-[#070b13] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] p-6 sm:p-8 space-y-6 transition-colors">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Direct Inquiries
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Our team welcomes feedback from educators, students, parents, and prospective partners.
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-5">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Official Email
                      </div>
                      <a
                        href="mailto:hello@hodoolabs.com"
                        className="text-base font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        hello@hodoolabs.com
                      </a>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        For general, technical, and partnership messages.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Response Window
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        1 &ndash; 2 Business Days
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        We review every inquiry thoughtfully.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Learn platform prompt */}
                <div className="rounded-xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/30 p-4 space-y-2">
                  <div className="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wider">
                    Looking for HodoLabs Learn?
                  </div>
                  <p className="text-xs text-indigo-800 dark:text-indigo-300 leading-relaxed">
                    If you are looking to access online courses, curriculum assessments or student practice directly, visit the portal.
                  </p>
                  <a
                    href="https://learn.hodoolabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    <span>Go to learn.hodoolabs.com</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
