import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HodoLabs",
  description: "Privacy policy and data protection principles for HodoLabs services.",
  alternates: {
    canonical: "https://hodoolabs.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3 border-b border-slate-200 pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
            Legal &amp; Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: September 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-600">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p>
              HodoLabs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is dedicated to protecting the personal information of individuals who visit our website, use our digital products, or communicate with us. This Privacy Policy details how we collect, handle, and safeguard your data across our online properties, including the main corporate website and related digital learning experiences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
            <p>We may collect information under the following categories:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Direct Communications:</strong> Information you voluntarily share when contacting us via email or contact forms (e.g., your name, email address, subject matter, and message).
              </li>
              <li>
                <strong>Technical &amp; Usage Data:</strong> Standard internet logging data such as browser type, operating system, referring URLs, and approximate geographic region collected to ensure site reliability and performance.
              </li>
              <li>
                <strong>Educational Assessment Data:</strong> For users accessing our learning platforms (such as HodoLabs Learn), learning metrics, question responses, and score progress are maintained securely to provide student diagnostics.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. How We Use Information</h2>
            <p>We utilize the collected information strictly for legitimate educational and business purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To provide, operate, and optimize our learning products and website.</li>
              <li>To respond to user inquiries, partnership requests, and feedback.</li>
              <li>To detect and prevent technical failures, unauthorized access, and abuse.</li>
              <li>To improve our curriculum offerings and assessment pedagogy.</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information or student data to third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Student Data Privacy</h2>
            <p>
              Protecting student privacy is foundational to our mission. Any learning or performance data generated through HodoLabs platforms is handled with strict confidentiality and in alignment with recognized global student data privacy best practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Data Retention &amp; Security</h2>
            <p>
              We apply industry-standard organizational and technical safeguards to protect information against unauthorized modification, disclosure, or destruction. Information is retained only as long as necessary to fulfill the purposes outlined in this policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">6. Inquiries &amp; Contact</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact our team at:
            </p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-800 font-medium">
              Email:{" "}
              <a href="mailto:hello@hodoolabs.com" className="text-indigo-600 underline">
                hello@hodoolabs.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
