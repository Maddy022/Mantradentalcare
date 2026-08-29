import Link from "next/link";
import { Scan, FileText, Sparkles, HeartHandshake, ArrowRight } from "lucide-react";

export function PatientPathway() {
  const steps = [
    {
      step: "01",
      icon: Scan,
      title: "Digital 3D Scan",
      desc: "Low-radiation digital imaging and high-res oral scan to map every detail of your dental health in minutes.",
    },
    {
      step: "02",
      icon: FileText,
      title: "Transparent Plan",
      desc: "Our specialists walk you through every treatment option with clear upfront timelines and no hidden costs.",
    },
    {
      step: "03",
      icon: Sparkles,
      title: "Gentle Treatment",
      desc: "Experience pain-free clinical care with advanced laser and rotary technology in a comfortable operatory.",
    },
    {
      step: "04",
      icon: HeartHandshake,
      title: "Lifelong Care",
      desc: "Personalized hygiene tips, dedicated follow-ups, and long-lasting warranties on restorations and implants.",
    },
  ];

  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-surface px-4 py-1.5 rounded-full border border-border mb-3">
            The Mantra Dental Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-heading tracking-tight">
            How Your Dental Journey Works
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mt-3">
            We've simplified dental visits into 4 seamless, stress-free steps designed for your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-7 rounded-3xl border border-border shadow-xs hover:shadow-xl hover:border-primary transition-all duration-300 flex flex-col group relative"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface text-primary flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-white transition-all shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-extrabold text-border group-hover:text-primary-light transition-colors font-heading">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-text-primary font-heading mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            <span>Start Your Journey Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
