import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { doctors, clinicInfo } from "@/lib/data";
import { DoctorCard } from "@/components/DoctorCard";
import { Award, Users, CheckCircle2, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Doctors",
  description: `Meet the team of specialist dentists and clinical directors at ${clinicInfo.name}.`,
};

export default function DoctorsPage() {
  const credentials = [
    { title: "Specialist MDS Degrees", desc: "Top Indian & International dental institutes" },
    { title: "Invisalign & Implant Certified", desc: "Fellowships in ICOI and clear aligner orthodontics" },
    { title: "Continuous Clinical Training", desc: "Adopting latest rotary, digital, and laser methods" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner with Team Photo Background & Jade Overlay */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center py-16 sm:py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Mantra Dental Specialist Team"
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
            <Award className="w-3.5 h-3.5 text-emerald-300" /> Specialist Dental Faculty
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading mb-4 tracking-tight drop-shadow-xs">
            Meet Our Specialist Dentists
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Our multidisciplinary team of prosthodontists, orthodontists, endodontists, and pediatric dentists bring decades of combined experience.
          </p>
        </div>
      </section>

      {/* Credentials Strip */}
      <section className="bg-white border-b border-border py-6 px-4 shadow-xs">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border">
            {credentials.map((c, i) => (
              <div key={i} className="flex items-center gap-3.5 pt-4 md:pt-0 first:pt-0 md:px-6">
                <div className="w-10 h-10 rounded-xl bg-surface text-primary flex items-center justify-center shrink-0 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm">{c.title}</h4>
                  <p className="text-xs text-text-secondary">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-20 px-4 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface border-t border-border py-16 sm:py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-text-primary">
            Ready to Consult with Our Specialists?
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Schedule an appointment today. Choose your preferred doctor or let us match you with the right specialist.
          </p>
          <div className="pt-2">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md text-base"
            >
              <Calendar className="w-4 h-4" /> Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
