import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | HodoLabs",
  description: "Terms of service governing the use of HodoLabs website and digital platforms.",
  alternates: {
    canonical: "https://hodoolabs.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-[#090d16] transition-colors">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md">
            Terms &amp; Agreements
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Last Updated: September 2026
          </p>
        </div>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the HodoLabs website, platforms, or related services (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">2. Permitted Use</h2>
            <p>
              Our Services are designed to provide information about HodoLabs and provide access to our digital learning products, including HodoLabs Learn. You agree to use the Services only for lawful educational and informational purposes and in a manner that does not infringe upon the rights of others or restrict their use of the Services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">3. Intellectual Property</h2>
            <p>
              All content, software, graphics, branding, trademarks, and documentation provided on HodoLabs properties are the exclusive intellectual property of HodoLabs or its content licensors. You may not copy, reproduce, modify, distribute, or reverse-engineer any portion of the Services without prior written authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">4. Third-Party Links &amp; Connected Services</h2>
            <p>
              Our website links directly to our specialized learning portal, HodoLabs Learn (located at learn.hodoolabs.com). While operated by HodoLabs, specific access rules and credentials apply to the learning application. We are not responsible for third-party websites or services linked from our pages.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">5. Disclaimer of Warranties</h2>
            <p>
              The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. HodoLabs makes no warranties, express or implied, regarding reliability, uninterrupted availability, or error-free operation of the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, HodoLabs shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of or inability to use the Services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">7. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms of Service, please contact us at:
            </p>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c121e] p-4 text-slate-800 dark:text-slate-200 font-medium transition-colors">
              Email:{" "}
              <a href="mailto:hello@hodoolabs.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                hello@hodoolabs.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
