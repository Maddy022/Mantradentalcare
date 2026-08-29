"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { treatments, treatmentCategories } from "@/lib/data";
import { TreatmentCard } from "@/components/TreatmentCard";
import { Sparkles, ShieldCheck, Zap, HeartPulse, ArrowRight, Calendar } from "lucide-react";

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Treatments", count: treatments.length },
    ...treatmentCategories.map(c => ({
      key: c.key,
      label: c.label,
      count: treatments.filter(t => t.category === c.key).length,
    })),
  ];

  const filteredTreatments = activeCategory === "all" 
    ? treatments 
    : treatments.filter(t => t.category === activeCategory);

  const guarantees = [
    { icon: Zap, title: "100% Pain-Free", desc: "Advanced gentle rotary and laser tools" },
    { icon: ShieldCheck, title: "Hospital-Grade Hygiene", desc: "Multi-tier autoclave sterilization" },
    { icon: HeartPulse, title: "Specialist Led", desc: "Consultations with certified MDS dentists" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner with Niche Background Photo & Jade Overlay */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center py-16 sm:py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=2000&q=80"
            alt="Dental Treatment Procedures"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#042A20]/95 via-[#084D3C]/90 to-[#0D7A5F]/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#042A20] via-transparent to-black/30"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-white">
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-white/25">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" /> Complete Clinical Services
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading mb-4 tracking-tight drop-shadow-xs">
            Comprehensive Dental Care
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            From routine preventive checkups and gentle cleanings to smile makeovers, root canals, and dental implants.
          </p>
        </div>
      </section>

      {/* Guarantee Strip */}
      <section className="bg-white border-b border-border py-6 px-4 shadow-xs">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border">
            {guarantees.map((g, i) => {
              const Icon = g.icon;
              return (
                <div key={i} className="flex items-center gap-3.5 pt-4 md:pt-0 first:pt-0 md:px-6">
                  <div className="w-10 h-10 rounded-xl bg-surface text-primary flex items-center justify-center shrink-0 border border-border">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">{g.title}</h4>
                    <p className="text-xs text-text-secondary">{g.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 px-4 container mx-auto max-w-7xl">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeCategory === category.key
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-text-primary border border-border hover:border-primary hover:text-primary shadow-2xs"
              }`}
            >
              <span>{category.label}</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                activeCategory === category.key ? "bg-white/25 text-white" : "bg-surface text-primary"
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface border-t border-border py-16 sm:py-20 px-4 text-center mt-12">
        <div className="container mx-auto max-w-3xl space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-text-primary">
            Need a Customized Dental Plan?
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our clinical team will conduct a thorough examination and create a step-by-step personalized treatment roadmap for you.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/book-appointment" 
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4" /> Book Consultation Online
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-white border border-border hover:bg-surface text-text-primary font-semibold py-3.5 px-8 rounded-full transition-colors text-sm sm:text-base"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
