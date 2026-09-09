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
      <section className="py-16 md:py-20 bg-radial-[at_top] from-indigo-50/50 via-white to-white border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md">
            Product Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Our Products
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We engineer focused, curriculum-aligned digital learning tools designed to foster comprehension, regular practice, and measurable mastery.
          </p>
        </div>
      </section>

      {/* Main Product Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Main Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/40 p-6 sm:p-10 shadow-sm space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200/80 pb-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200/70 px-3 py-1 rounded-full">
                    Learning &amp; Assessment Platform
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Product
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  HodoLabs Learn
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
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
                    className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xs hover:border-slate-300 transition-colors"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-3.5">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Independent Deployment Notice */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
              <span>
                <strong>Independent Deployment:</strong> HodoLabs Learn is deployed and managed as a dedicated product application at{" "}
                <a
                  href="https://learn.hodoolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-600 underline"
                >
                  learn.hodoolabs.com
                </a>
                .
              </span>
            </div>
          </div>

          {/* Forward-Looking Section */}
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-8 text-center space-y-3">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-slate-200/70 text-slate-600 mb-1">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Future Innovations
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              More products are being explored and developed at HodoLabs. We continue to research and prototype new digital tools to enrich curriculum-based education.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
