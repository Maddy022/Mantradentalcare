import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { clinicInfo, stats, faqs, doctors } from "@/lib/data";
import { DoctorCard } from "@/components/DoctorCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ShieldCheck, HeartPulse, Sparkles, Clock, CheckCircle2, HelpCircle, Award, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn more about ${clinicInfo.name}, our mission, experienced team, and high-standard dental care in ${clinicInfo.city}.`,
};

export default function AboutPage() {
  const values = [
    {
      icon: HeartPulse,
      title: "Patient-Centered Care",
      description:
        "Every treatment plan is tailored to your unique oral health needs, comfort levels, and aesthetic goals.",
    },
    {
      icon: ShieldCheck,
      title: "Gold-Standard Hygiene",
      description:
        "We follow strict multi-step sterilization and hospital-grade disinfection protocols for maximum safety.",
    },
    {
      icon: Sparkles,
      title: "State-of-the-Art Tech",
      description:
        "Digital X-rays, 3D imaging, and modern rotary systems ensure painless procedures and pinpoint precision.",
    },
    {
      icon: Clock,
      title: "Zero Wait Time",
      description:
        "We value your schedule with punctual appointments, streamlined digital check-ins, and flexible hours.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner with Dental Photo Background & Jade Gradient */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center py-16 sm:py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2000&q=80"
            alt="Mantra Dental Care Operatory"
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
            <Award className="w-3.5 h-3.5 text-emerald-300" /> Established in {clinicInfo.yearEstablished} • {clinicInfo.city}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading mb-4 tracking-tight drop-shadow-xs">
            About {clinicInfo.name}
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {clinicInfo.description}
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white border-b border-border py-8 sm:py-10 shadow-xs">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-border">
            {stats.map((stat, i) => (
              <div key={i} className="p-2">
                <div className="text-3xl md:text-4xl font-extrabold text-primary font-heading tracking-tight">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-xs sm:text-sm mt-1 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Story with Real Clinic Photo */}
      <section className="py-16 sm:py-24 px-4 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-surface px-4 py-1.5 rounded-full border border-border">
              Our Clinical Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-heading tracking-tight leading-tight">
              Redefining Dentistry with Comfort, Precision & Integrity
            </h2>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              At {clinicInfo.name}, we believe that visiting the dentist should be reassuring, pain-free, and empowering. Founded with the mission to bring world-class dental care to {clinicInfo.city}, our clinic combines genuine human empathy with cutting-edge dental technology.
            </p>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              Whether you need routine preventive maintenance, cosmetic porcelain veneers, orthodontic alignment with clear aligners, or full smile restorations with dental implants, our multidisciplinary specialists are dedicated to creating healthy, confident smiles that last a lifetime.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Digital low-radiation 3D imaging",
                "Gentle pain-free rotary techniques",
                "Upfront transparent pricing",
                "Dedicated pediatric dentistry wing",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 bg-surface p-3 rounded-xl border border-border text-text-primary text-xs sm:text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Clinic Photo Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-square bg-surface">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                alt="Mantra Dental Care Modern Facility"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-border shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-text-primary">Mantra Dental Operatory</h4>
                    <p className="text-xs text-text-secondary">Ultra-Modern & Hospital-Sterile</p>
                  </div>
                  <span className="bg-surface text-primary text-xs font-bold px-3 py-1 rounded-full border border-border">
                    {clinicInfo.city}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Commitments Section */}
      <section className="bg-surface/50 border-y border-border py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-white px-4 py-1.5 rounded-full border border-border">
              Standards of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-heading mt-3">
              Our Core Commitments to You
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2">
              Every detail of our practice is designed around patient safety, comfort, and clinical perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white p-7 rounded-3xl border border-border shadow-xs hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col group">
                  <div className="w-13 h-13 rounded-2xl bg-surface text-primary flex items-center justify-center mb-5 border border-border group-hover:bg-primary group-hover:text-white transition-all shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-text-primary mb-2 text-base font-heading group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialist Doctors Showcase */}
      <section className="py-16 sm:py-24 px-4 container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-surface px-4 py-1.5 rounded-full border border-border">
            Clinical Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-heading mt-3">
            Our Doctors
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mt-2">
            Led by Dr. Chandni Rughani (Chief Dental Surgeon) and visiting implantologist Dr. Nilesh Rughani.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      {/* FAQ Section with Interactive Accordion */}
      <section className="bg-surface/50 border-t border-border py-16 sm:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white text-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-border mb-3">
              <HelpCircle className="w-4 h-4" /> Got Questions?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2">
              Everything you need to know about your visit, insurance, and procedures.
            </p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark py-16 sm:py-20 px-4 text-center text-white relative overflow-hidden">
        <div className="container mx-auto max-w-3xl space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight">
            Ready to Experience Modern Dental Care?
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Schedule an appointment today. We welcome new patients of all ages with zero-wait check-ins.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book-appointment"
              className="bg-white text-primary font-bold py-3.5 px-8 rounded-full hover:bg-surface transition shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-primary" /> Book Consultation Online
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/80 hover:border-white text-white font-semibold py-3.5 px-8 rounded-full hover:bg-white/15 transition"
            >
              Contact Our Clinic
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
