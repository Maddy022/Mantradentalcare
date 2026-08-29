import Link from "next/link";
import { CheckCircle, Award, Users, HeartHandshake, ShieldCheck } from "lucide-react";

export function AboutPreview() {
  const highlights = [
    { title: "Pain-Free Procedures", desc: "Advanced gentle anesthesia and modern rotary systems." },
    { title: "Sterilization Excellence", desc: "Hospital-grade multi-tier hygiene and autoclave protocols." },
    { title: "Experienced Specialists", desc: "Prosthodontists, Orthodontists, and Endodontists under one roof." },
    { title: "Transparent Pricing", desc: "Upfront treatment options with zero hidden charges." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-3xl lg:rounded-[2.5rem] overflow-hidden border border-border shadow-xs">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Gradient badge */}
            <div className="lg:w-5/12 bg-gradient-to-br from-primary via-primary to-primary-dark p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden text-white min-h-[260px] lg:min-h-full">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10 space-y-4">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Our Philosophy
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading leading-tight">
                  Modern dentistry with a gentle, personal touch.
                </h3>
              </div>

              <p className="relative z-10 text-white/85 text-sm sm:text-base leading-relaxed pt-6">
                We believe dental visits should be transparent, painless, and empowering for patients of all ages.
              </p>
            </div>

            {/* Right side - Content */}
            <div className="lg:w-7/12 p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary font-heading mb-4">
                Why Choose Mantra Dental Care?
              </h2>
              <p className="text-text-secondary mb-8 text-sm sm:text-base leading-relaxed">
                Combining clinical mastery with a warm, patient-first approach to give you healthy, confident smiles.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-border shadow-xs">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">{item.title}</h4>
                      <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-all duration-200 shadow-md text-center"
                >
                  About Our Practice
                </Link>
                <Link
                  href="/doctors"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-semibold text-primary bg-white border border-border hover:bg-surface rounded-full transition-colors duration-200 text-center"
                >
                  Meet Our Doctors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
