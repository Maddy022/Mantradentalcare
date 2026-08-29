import { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { clinicInfo, officeHours } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, MessageSquare, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${clinicInfo.name} in ${clinicInfo.city} to book an appointment or ask a question.`,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pb-16">
      {/* Hero Section with Clinic Reception Photo Background & Jade Overlay */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center py-16 sm:py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
            alt="Mantra Dental Care Reception"
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
            <MessageSquare className="w-3.5 h-3.5 text-emerald-300" /> Patient Support & Appointments
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading mb-4 tracking-tight drop-shadow-xs">
            Get in Touch With Us
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Have a question about a treatment or need immediate scheduling? Our friendly desk team is here to assist you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Info Cards, Map & Hours */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-border shadow-2xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-surface text-primary flex items-center justify-center shrink-0 border border-border">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-xs uppercase tracking-wider">Phone</h4>
                    <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`} className="text-sm font-semibold text-primary hover:underline mt-0.5 block">
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-border shadow-2xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-surface text-primary flex items-center justify-center shrink-0 border border-border">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-xs uppercase tracking-wider">Email</h4>
                    <a href={`mailto:${clinicInfo.email}`} className="text-sm font-semibold text-primary hover:underline mt-0.5 block truncate max-w-[140px]">
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-border shadow-2xs flex items-start gap-3.5 sm:col-span-2">
                  <div className="w-10 h-10 rounded-xl bg-surface text-primary flex items-center justify-center shrink-0 border border-border">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-xs uppercase tracking-wider">Clinic Address</h4>
                    <p className="text-xs sm:text-sm text-text-secondary mt-0.5 leading-relaxed">{clinicInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Map Component */}
              <MapEmbed />

              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-6 border border-border shadow-xs">
                <h4 className="font-bold text-text-primary text-sm font-heading mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> Operating Hours
                </h4>
                <div className="space-y-2">
                  {officeHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-xs sm:text-sm border-b border-border/50 pb-2 last:border-0 last:pb-0">
                      <span className="font-medium text-text-primary">{item.day}</span>
                      <span className={`${item.hours === 'Closed' ? 'text-red-500 font-semibold' : 'text-text-secondary'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
