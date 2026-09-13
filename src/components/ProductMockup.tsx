import { Award, BookOpen, BarChart3, Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";

export function ProductMockup() {
  return (
    <div className="relative rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#0c121e] shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 overflow-hidden transition-colors">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-[#090d16] px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-600" />
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">HodoLabs Learn &mdash; Student Platform</span>
        </div>
        <a
          href="https://learn.hodoolabs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
        >
          <span>learn.hodoolabs.com</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Internal Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
        {/* Left Navigation preview */}
        <div className="lg:col-span-4 p-5 bg-slate-50/40 dark:bg-[#0a0f19] space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Platform Modules
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3 rounded-lg bg-white dark:bg-[#111927] border border-indigo-100 dark:border-indigo-900/50 p-3 shadow-2xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white">
                <BookOpen className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">Curriculum Explorer</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">MOE, Common Core, CBSE &amp; more</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white dark:bg-[#111927] border border-slate-200/60 dark:border-slate-800 p-3 shadow-2xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">
                <Award className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">Assessment Engine</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Timed tests &amp; smart evaluations</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white dark:bg-[#111927] border border-slate-200/60 dark:border-slate-800 p-3 shadow-2xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-violet-600 text-white">
                <BarChart3 className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">Performance Analytics</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Diagnostic mastery tracking</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/30 p-4 text-xs text-indigo-950 dark:text-indigo-200">
            <div className="font-semibold mb-1 flex items-center gap-1.5 text-indigo-900 dark:text-indigo-200">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
              Structured Pedagogy
            </div>
            <p className="text-[11px] text-indigo-800 dark:text-indigo-300 leading-relaxed">
              Every assessment is tagged to specific learning objectives, enabling targeted revision and clear mastery signals.
            </p>
          </div>
        </div>

        {/* Right Active Dashboard Preview */}
        <div className="lg:col-span-8 p-5 sm:p-7 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Active Assessment Session
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                Grade 5 Mathematics Assessment
              </h4>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#111927] px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Progress: 8 of 10 Completed
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div className="bg-indigo-600 h-full rounded-full w-4/5 transition-all duration-500" />
          </div>

          {/* Diagnostic Competencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg border border-slate-200/70 dark:border-slate-800 p-3.5 bg-slate-50/30 dark:bg-[#101827]/40">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <span>Algebraic Reasoning</span>
                <span className="text-indigo-600 dark:text-indigo-400">95%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[95%]" />
              </div>
            </div>

            <div className="rounded-lg border border-slate-200/70 dark:border-slate-800 p-3.5 bg-slate-50/30 dark:bg-[#101827]/40">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <span>Data &amp; Graphs</span>
                <span className="text-indigo-600 dark:text-indigo-400">88%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[88%]" />
              </div>
            </div>

            <div className="rounded-lg border border-slate-200/70 dark:border-slate-800 p-3.5 bg-slate-50/30 dark:bg-[#101827]/40">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <span>Geometry &amp; Measurements</span>
                <span className="text-indigo-600 dark:text-indigo-400">92%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[92%]" />
              </div>
            </div>

            <div className="rounded-lg border border-slate-200/70 dark:border-slate-800 p-3.5 bg-slate-50/30 dark:bg-[#101827]/40">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                <span>Word Problems</span>
                <span className="text-indigo-600 dark:text-indigo-400">84%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full w-[84%]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Direct access to live student accounts and teacher management.
            </span>
            <a
              href="https://learn.hodoolabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              <span>Launch HodoLabs Learn</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
