import type { Metadata } from "next";
import { ProductMockup } from "@/components/ProductMockup";
import {
  ArrowUpRight,
  BookOpen,
  Award,
  Sparkles,
  Layers,
  Users,
  BarChart3,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HodoLabs Products — HodoLabs Learn",
  description:
    "Explore HodoLabs Learn, our digital learning and assessment platform designed around structured curriculum-based learning.",
  alternates: {
    canonical: "https://hodoolabs.com/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-20 bg-radial-[at_top] from-indigo-50/50 dark:from-indigo-950/40 via-white dark:via-[#090d16] to-white dark:to-[#090d16] border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-md">
            Product Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Our Products
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We engineer focused, curriculum-aligned digital learning tools designed to foster comprehension, regular practice, and measurable mastery.
          </p>
        </div>
      </section>

      {/* Main Product Showcase */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#090d16] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Main Card */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50/40 dark:from-[#0c121e] dark:to-[#070b13] p-6 sm:p-10 shadow-sm space-y-10 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200/80 dark:border-slate-800 pb-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-800/70 px-3 py-1 rounded-full">
                    Learning &amp; Assessment Platform
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Product
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                  HodoLabs Learn
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  HodoLabs Learn is a digital learning and assessment platform designed around structured curriculum-based learning and assessments.
                </p>
              </div>

              <div>
                <a
                  href="https://learn.hodoolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all hover:shadow-lg"
                >
                  <span>Visit HodoLabs Learn</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Product Mockup */}
            <div>
              <ProductMockup />
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {[
                {
                  icon: BookOpen,
                  title: "Curriculum-based structure",
                  description:
                    "Content organized systematically according to official educational standards and grade-level syllabi.",
                },
                {
                  icon: Award,
                  title: "Online assessments",
                  description:
                    "Diagnostic and timed assessment modules enabling rigorous knowledge checks and performance measurement.",
                },
                {
                  icon: Sparkles,
                  title: "Quizzes",
                  description:
                    "Interactive quiz formats offering immediate question feedback, step-by-step reasoning, and solutions.",
                },
                {
                  icon: Layers,
                  title: "Learning content",
                  description:
                    "Structured conceptual modules designed to build foundational mastery before moving to advanced applications.",
                },
                {
                  icon: Users,
                  title: "Student experience",
                  description:
                    "Distraction-free, responsive interface engineered for seamless student navigation across any modern browser.",
                },
                {
                  icon: BarChart3,
                  title: "Performance-oriented learning",
                  description:
                    "Clear analytics tracking subject accuracy, question trends, and specific areas requiring focused revision.",
                },
              ].map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111927] p-6 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mb-3.5">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Independent Deployment Notice */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#101827] p-4 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 dark:text-slate-200">Independent Deployment:</strong> HodoLabs Learn is deployed and managed as a dedicated product application at{" "}
                <a
                  href="https://learn.hodoolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-600 dark:text-indigo-400 underline"
                >
                  learn.hodoolabs.com
                </a>
                .
              </span>
            </div>
          </div>

          {/* Forward-Looking Section */}
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0c121e]/50 p-8 text-center space-y-3 transition-colors">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 mb-1">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Future Innovations
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              More products are being explored and developed at HodoLabs. We continue to research and prototype new digital tools to enrich curriculum-based education.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
