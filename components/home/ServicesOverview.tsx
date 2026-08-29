import Link from "next/link";
import { treatments } from "@/lib/data";
import { ArrowRight, Sparkles } from "lucide-react";

export function ServicesOverview() {
  const displayedServices = treatments.slice(0, 8);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-surface text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-3 border border-border">
            <Sparkles className="w-4 h-4" /> Dental Specialties
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary font-heading mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From routine preventive checkups to advanced cosmetic restorations, we bring modern gentle dentistry to your family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedServices.map((service) => (
            <Link 
              href="/treatments" 
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 group border border-border hover:border-primary flex flex-col h-full hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-surface text-primary rounded-xl flex items-center justify-center text-xl font-bold font-heading mb-5 group-hover:bg-primary group-hover:text-white transition-all shadow-xs">
                {service.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2 font-heading group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-text-secondary line-clamp-3 mb-5 flex-grow leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-semibold text-primary mt-auto group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}
