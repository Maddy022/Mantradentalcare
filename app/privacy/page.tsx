import { Metadata } from "next";
import Link from "next/link";
import { clinicInfo } from "@/lib/data";
import { ShieldCheck, ArrowLeft, Lock, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Medical Disclaimer",
  description: `Privacy policy and patient data protection information for ${clinicInfo.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl bg-white p-8 sm:p-12 rounded-3xl border border-border shadow-xs">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-semibold mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-surface text-primary flex items-center justify-center border border-border">
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-text-primary">
              Privacy Policy & Medical Disclaimer
            </h1>
            <p className="text-xs text-text-secondary">Last updated: August 2026 • {clinicInfo.name}</p>
          </div>
        </div>

        <hr className="border-border my-6" />

        <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
          {/* Medical Disclaimer Alert */}
          <div className="p-4 rounded-2xl bg-surface border border-primary/20 text-text-primary">
            <h2 className="font-bold text-base mb-1 flex items-center gap-2 text-primary">
              <FileText className="w-4 h-4" /> Medical & Dental Disclaimer
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary">
              The content published on this website (including descriptions of dental treatments, procedures, and oral health tips) is provided solely for educational and informational purposes. It does not constitute formal medical or dental advice and should never substitute an in-person clinical diagnosis or examination by a licensed dental professional.
            </p>
          </div>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-text-primary mb-2 font-heading">
              1. Information We Collect
            </h2>
            <p>
              When you use our website to inquire or book an appointment, we may collect basic personal contact details provided voluntarily by you:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Full Name</li>
              <li>Contact Phone Number</li>
              <li>Email Address</li>
              <li>Nature of your dental concern or appointment preference</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-text-primary mb-2 font-heading">
              2. How We Use Your Information
            </h2>
            <p>
              Your contact information is used strictly by our clinic front desk to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Confirm and schedule your clinic appointments with Dr. Chandni Rughani or visiting specialists.</li>
              <li>Respond to your direct inquiries submitted through our contact forms.</li>
              <li>We never sell, rent, or trade your personal or healthcare information to any third parties or advertisers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-text-primary mb-2 font-heading">
              3. Data Security & Encryption
            </h2>
            <p>
              We implement industry-standard 256-bit SSL (HTTPS) encryption across our entire website. All data transmitted between your browser and our web application is securely encrypted in transit.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-text-primary mb-2 font-heading">
              4. Contact Our Clinic
            </h2>
            <p>
              For any questions regarding your data privacy or treatment records, you can reach out directly to:
            </p>
            <div className="mt-2 p-4 rounded-xl bg-surface border border-border text-xs sm:text-sm space-y-1 text-text-primary">
              <p><strong>{clinicInfo.name} ({clinicInfo.branch})</strong></p>
              <p>{clinicInfo.address}</p>
              <p>Phone: <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`} className="text-primary font-bold">{clinicInfo.phone}</a></p>
              <p>Email: <a href={`mailto:${clinicInfo.email}`} className="text-primary font-bold">{clinicInfo.email}</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
