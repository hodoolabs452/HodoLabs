import type { Metadata } from "next";
import { ArrowUpRight, Compass, Target, Lightbulb, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "About HodoLabs",
  description:
    "HodoLabs is a technology and product company focused on building modern digital experiences for learning and education.",
  alternates: {
    canonical: "https://hodoolabs.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-radial-[at_top] from-indigo-50/50 via-white to-white border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md">
            Company &amp; Vision
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            About HodoLabs
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            HodoLabs is a technology and product company focused on building modern digital experiences for learning and education.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Why HodoLabs Exists */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Why HodoLabs Exists
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Education has historically been divided between dense static textbooks and superficial digital games that entertain without instructing. HodoLabs was formed with a straightforward belief: technology can make digital learning significantly simpler, more rigorous, and genuinely accessible.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              We design digital tools that respect students&apos; time and cognitive focus. By anchoring every feature to recognized educational curriculum frameworks and modern software design, we provide learners with clear paths to true subject proficiency.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6 sm:p-8 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                Our Vision
              </h3>
              <p className="text-base font-semibold text-slate-900 leading-snug">
                &ldquo;To build technology that makes learning more accessible, engaging and measurable.&rdquo;
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-violet-50/40 p-6 sm:p-8 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700">
                Our Mission
              </h3>
              <p className="text-base font-semibold text-slate-900 leading-snug">
                &ldquo;To create practical digital products that help learners learn, practice and improve.&rdquo;
              </p>
            </div>
          </div>

          {/* Product-First Approach */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Our Product-First Approach
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Rather than building sprawling, fragmented software, we follow an intentional product-first discipline. Every workflow, interactive question, and assessment diagnostic in our platforms undergoes thoughtful design to eliminate unnecessary friction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-slate-200/80 p-5 bg-slate-50/40 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Lightbulb className="h-4 w-4 text-indigo-600" />
                  <span>Simplicity &amp; Accessibility</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clean visual hierarchy, intuitive interaction patterns, and fast-loading web applications accessible on desktop, tablet, or mobile.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 p-5 bg-slate-50/40 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Cpu className="h-4 w-4 text-indigo-600" />
                  <span>Curriculum Integrity</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct alignment with actual syllabus structures, question typologies, and difficulty standards to deliver meaningful practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Banner */}
      <section className="py-16 bg-slate-50/80 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Experience HodoLabs in Action
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
            HodoLabs Learn is our live flagship digital learning and assessment platform.
          </p>
          <div className="pt-2">
            <a
              href="https://learn.hodoolabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
            >
              <span>Explore HodoLabs Learn</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
