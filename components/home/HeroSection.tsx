import Link from "next/link";
import Image from "next/image";
import { stats, clinicInfo } from "@/lib/data";
import { Star, ShieldCheck, Sparkles, Calendar, ArrowRight, CheckCircle2, Award } from "lucide-react";

export function HeroSection() {
  const heroFeatures = [
    "Digital 3D Scans & Laser Tech",
    "Hospital-Grade Multi-Tier Sterilization",
    "Gentle, Pain-Free Anesthesia",
  ];

  return (
    <section className="relative min-h-[640px] lg:min-h-[760px] flex items-center pt-10 sm:pt-16 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Niche Dental Clinic Background Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Dental Clinic Operatory"
          fill
          priority
          className="object-cover object-center scale-105 transform motion-safe:animate-pulse-slow"
          sizes="100vw"
        />
        {/* Multi-layered Rich Jade Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#042A20]/95 via-[#084D3C]/90 to-[#0D7A5F]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#042A20] via-transparent to-black/30"></div>
        {/* Subtle radial light highlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-light/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-8 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold border border-white/25 shadow-lg">
              <span className="flex text-amber-300">
                <Star className="w-4 h-4 fill-amber-300" />
              </span>
              <span>5.0★ Rated on Google (133 Reviews)</span>
              <span className="text-white/40">•</span>
              <span className="text-primary-light">Mavdi Branch, Rajkot</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white font-heading leading-[1.1] tracking-tight drop-shadow-sm">
              Your Smile, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-primary-light to-white">
                Our Passion.
              </span>
            </h1>

            {/* Description quote */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 font-body leading-relaxed drop-shadow-xs">
              Experience modern, pain-free dentistry at {clinicInfo.name}. From routine wellness cleanings to full smile restorations with dental implants and clear aligners — all in a gentle, luxurious environment.
            </p>

            {/* Feature Checkpoints */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 pt-1 text-white/90 text-xs sm:text-sm font-medium">
              {heroFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-black/20 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/book-appointment"
                className="w-full sm:w-auto bg-white text-primary-dark hover:bg-surface font-bold px-8 py-4 rounded-full transition-all duration-200 text-center shadow-xl hover:shadow-2xl text-base flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 text-primary" />
                <span>Book Appointment Online</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/treatments"
                className="w-full sm:w-auto border-2 border-white/80 hover:border-white text-white hover:bg-white/15 backdrop-blur-xs px-8 py-4 rounded-full font-semibold transition-all duration-200 text-center text-base"
              >
                Explore Treatments
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Clinic Highlight Card */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-4">
            
            {/* Quick consultation preview card */}
            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-6 border border-white/30 text-white shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">New Patient Special</h4>
                    <p className="text-xs text-white/80">Digital Consult & X-Ray</p>
                  </div>
                </div>
                <span className="bg-emerald-400/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300/30">
                  Open Today
                </span>
              </div>
              
              <p className="text-xs text-white/85 leading-relaxed">
                Walk-ins and scheduled appointments welcome. Flexible weekend hours and zero-wait check-ins.
              </p>

              <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs font-medium text-white/90">
                <span>📍 {clinicInfo.city}</span>
                <span>⏱️ {clinicInfo.openingHours}</span>
              </div>
            </div>

            {/* Micro Badge: Emergency Care */}
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Emergency Dental Care</h5>
                  <p className="text-[11px] text-white/70">Toothache & trauma support</p>
                </div>
              </div>
              <a 
                href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="text-xs font-bold text-emerald-300 hover:underline"
              >
                Call Now →
              </a>
            </div>

          </div>
        </div>

        {/* Dynamic Glassmorphic Stats Strip */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 divide-y-0 divide-x-0 lg:divide-x divide-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center px-2 sm:px-4 py-1 sm:py-0">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1 font-heading tracking-tight drop-shadow-xs">
                    {stat.value}
                  </span>
                  <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
