"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles, Trophy, BookOpen, Layers, BarChart3 } from "lucide-react";

export function HeroMockup() {
  const [selectedOption, setSelectedOption] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<"math" | "science">("math");

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Decorative Glow */}
      <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 blur-xl opacity-70 dark:opacity-40 pointer-events-none" />

      {/* Main SaaS Frame */}
      <div className="relative rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0c121e] shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-950/40 overflow-hidden transition-colors">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-[#090d16] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-2 hidden sm:inline-block text-xs font-mono text-slate-400 dark:text-slate-500">
              learn.hodoolabs.com/assessment
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Assessment Engine
            </span>
          </div>
        </div>

        {/* Mockup Body */}
        <div className="p-4 sm:p-6 lg:p-7">
          {/* Subheader: Curriculum bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Curriculum:
              </span>
              <button
                type="button"
                onClick={() => setActiveTab("math")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  activeTab === "math"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                🇸🇬 Singapore Primary Math
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("science")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  activeTab === "science"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                🇺🇸 Common Core Grade 5
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                <Sparkles className="h-3.5 w-3.5" />
                Adaptive Practice
              </span>
            </div>
          </div>

          {/* Interactive Question Card */}
          <div className="mt-5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-[#101827]/50 p-5 sm:p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                <BookOpen className="h-3.5 w-3.5" />
                Fractions &amp; Ratios &bull; Question 4 of 12
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Difficulty: <span className="font-semibold text-indigo-600 dark:text-indigo-400">Mastery Level</span>
              </span>
            </div>

            <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-5">
              A bakery baked 480 cupcakes in the morning. They sold 3/8 of them before noon, and 2/5 of the remainder in the afternoon. How many cupcakes remained at the end of the day?
            </p>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 0, label: "A", text: "120 cupcakes" },
                { id: 1, label: "B", text: "180 cupcakes", isCorrect: true },
                { id: 2, label: "C", text: "210 cupcakes" },
                { id: 3, label: "D", text: "240 cupcakes" },
              ].map((opt) => {
                const isSelected = selectedOption === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedOption(opt.id)}
                    className={`flex items-center justify-between rounded-lg border p-3.5 text-left text-sm font-medium transition-all ${
                      isSelected
                        ? "border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-200 shadow-xs ring-1 ring-indigo-600"
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111927] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/70 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${
                          isSelected
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        {opt.label}
                      </span>
                      <span>{opt.text}</span>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {selectedOption === 1 && (
              <div className="mt-4 rounded-lg border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/60 dark:bg-emerald-950/40 p-3.5 text-xs text-emerald-900 dark:text-emerald-200 animate-in fade-in duration-200">
                <span className="font-semibold">Correct Answer (B):</span> Sold morning = 3/8 &times; 480 = 180 (Remaining = 300). Sold afternoon = 2/5 &times; 300 = 120. Final remaining = 300 &minus; 120 = 180 cupcakes.
              </div>
            )}
          </div>

          {/* Stats Bar */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="flex items-center gap-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#111927] p-3 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <BarChart3 className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Session Accuracy</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">92%</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#111927] p-3 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <Trophy className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Concept Mastery</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">Grade Level Proficient</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#111927] p-3 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400">
                <Layers className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Curriculums</div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">Global Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
