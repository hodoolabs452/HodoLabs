import Link from "next/link";
import { HeroMockup } from "@/components/HeroMockup";
import { ProductMockup } from "@/components/ProductMockup";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  BarChart3,
  Cpu,
  Target,
  Users,
  Compass,
  Layers,
  Award,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-radial-[at_top] from-indigo-50/70 dark:from-indigo-950/40 via-white dark:via-[#090d16] to-white dark:to-[#090d16] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 dark:border-indigo-800/80 bg-indigo-50/60 dark:bg-indigo-950/60 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Technology + Education + Product Innovation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.12]">
              Building Better Digital Learning Experiences
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              HodoLabs builds modern technology products that make learning, assessment and digital education simpler, smarter and more accessible.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://learn.hodoolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/25 active:scale-98"
              >
                <span>Explore HodoLabs Learn</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#product"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111927] px-6 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors shadow-2xs"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="mt-14 md:mt-18">
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* 2. PRODUCT SECTION */}
      <section id="product" className="py-20 md:py-28 bg-slate-50/60 dark:bg-[#070b13] border-y border-slate-100 dark:border-slate-800 scroll-mt-14 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-md">
              Our Product
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              HodoLabs Learn
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              HodoLabs Learn is our digital learning and assessment platform designed to help students learn, practice and assess their knowledge through structured curriculum-based experiences.
            </p>
          </div>

          {/* Product Preview Mockup */}
          <ProductMockup />

          {/* Feature Cards Covering All 8 Product Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[
              {
                icon: BookOpen,
                title: "Curriculum-Based Learning",
                description:
                  "Aligned to official national and global curricula, organizing learning content by syllabus and grade level.",
              },
              {
                icon: Award,
                title: "Online Assessments",
                description:
                  "Comprehensive assessment engine supporting timed tests, diagnostic reviews, and objective evaluation benchmarks.",
              },
              {
                icon: Sparkles,
                title: "Interactive Quizzes",
                description:
                  "Engaging questions across 11 question types designed to build conceptual clarity and test retention.",
              },
              {
                icon: Compass,
                title: "Chapter & Topic Practice",
                description:
                  "Targeted practice drills allowing students to master individual chapters and topics before moving forward.",
              },
              {
                icon: Cpu,
                title: "AI-Powered Explanations",
                description:
                  "Instant step-by-step reasoning, solution hints, and intelligent breakdowns for every practice problem.",
              },
              {
                icon: Target,
                title: "Points & Gamification",
                description:
                  "Earn XP, maintain daily study streaks, climb leaderboards, and celebrate measurable learning milestones.",
              },
              {
                icon: Users,
                title: "Student Experience",
                description:
                  "A distraction-free, accessible, and fast web application designed for focused, enjoyable learning.",
              },
              {
                icon: BarChart3,
                title: "Progress & Analytics",
                description:
                  "Real-time diagnostic analytics tracking subject accuracy, topic mastery, and revision recommendations.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0c121e] p-6 shadow-2xs hover:shadow-md transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Product CTA */}
          <div className="text-center pt-2">
            <a
              href="https://learn.hodoolabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-slate-800 dark:hover:bg-indigo-500 transition-colors"
            >
              <span>Explore HodoLabs Learn &rarr;</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400 dark:text-slate-200" />
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Opens the live HodoLabs Learn platform at learn.hodoolabs.com
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-white dark:bg-[#090d16] transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-md">
              Simple &amp; Intuitive
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              How It Works
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              A structured three-step cycle designed to build mastery through practice and assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose",
                description:
                  "Choose a curriculum, grade, subject or learning area tailored to your educational goals.",
                icon: Layers,
              },
              {
                step: "02",
                title: "Learn & Practice",
                description:
                  "Access structured learning content and practice through assessments and interactive quizzes.",
                icon: BookOpen,
              },
              {
                step: "03",
                title: "Assess & Improve",
                description:
                  "Test knowledge, understand performance and continue improving with clear diagnostics.",
                icon: Target,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0c121e] p-7 shadow-xs hover:border-indigo-200 dark:hover:border-indigo-800 transition-all group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-indigo-600/90 dark:text-indigo-400 font-mono">
                      {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/60 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY HODOLABS */}
      <section className="py-20 md:py-28 bg-slate-50/60 dark:bg-[#070b13] border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-md">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Technology Designed Around Learning
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              Built from first principles to prioritize educational efficacy over superficial gamification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Student First",
                description:
                  "We focus on creating simple and engaging digital experiences for learners.",
              },
              {
                icon: BookOpen,
                title: "Structured Learning",
                description:
                  "Learning experiences are organized around clear curriculum and educational structures.",
              },
              {
                icon: Target,
                title: "Smart Assessment",
                description:
                  "Assessment should help learners understand what they know and where they can improve.",
              },
              {
                icon: Cpu,
                title: "Product Innovation",
                description:
                  "We continuously build and improve technology that solves real learning problems.",
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] p-6 shadow-2xs hover:shadow-sm transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ABOUT HODOLABS SECTION */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#090d16] border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-md">
            Company
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            About HodoLabs
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            HodoLabs is a technology-focused product company building digital experiences for the next generation of learners.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              <span>Explore our story</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="py-16 md:py-20 bg-slate-900 dark:bg-[#0c121e] border-t border-slate-800 text-white transition-colors">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to explore better learning?
          </h2>
          <p className="text-slate-300 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Discover HodoLabs Learn and experience our digital learning platform.
          </p>
          <div className="pt-2">
            <a
              href="https://learn.hodoolabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:scale-102"
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
