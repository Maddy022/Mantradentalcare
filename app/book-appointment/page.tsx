import { Metadata } from "next";
import { clinicInfo, officeHours } from "@/lib/data";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Phone, Mail, Clock, MapPin, CalendarCheck, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Schedule your visit with our dental professionals at Mantra Dental Care.",
};

export default function BookAppointmentPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || clinicInfo.calendlyUrl;

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-12 sm:py-16 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            <CalendarCheck className="w-3.5 h-3.5" /> Instant Confirmation
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-3">
            Schedule Your Visit
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
            Select a convenient date and time for your consultation with our dental team.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Booking Widget Area */}
          <div className="lg:col-span-2">
            <div className="bg-white p-4 sm:p-6 rounded-3xl border border-border shadow-xs">
              <div className="mb-4 p-4 rounded-2xl bg-surface border border-border">
                <p className="text-xs sm:text-sm text-text-primary font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span><strong>Online Scheduling:</strong> Available for <strong>Dr. Chandni Rughani</strong> (Chief Dental Surgeon).</span>
                </p>
                <p className="text-xs text-text-secondary mt-1 pl-4">
                  For complex implant consultations with visiting specialist <strong>Dr. Nilesh Rughani</strong>, please call our reception at <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`} className="text-primary font-bold hover:underline">{clinicInfo.phone}</a>.
                </p>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-heading text-text-primary mb-4">
                Select an Appointment Slot
              </h2>
              <CalendlyEmbed url={calendlyUrl} />
            </div>
          </div>

          {/* Sidebar Contact & Hours */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-xs border border-border">
              <h3 className="text-lg font-bold font-heading text-text-primary mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-surface text-primary flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                Prefer to Call Us?
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm mb-2">Speak directly with our receptionist:</p>
              <a 
                href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`} 
                className="text-base sm:text-lg font-bold text-primary hover:underline block mb-4"
              >
                {clinicInfo.phone}
              </a>
              
              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-bold text-text-primary mb-1 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" /> Email Inquiries
                </h4>
                <a href={`mailto:${clinicInfo.email}`} className="text-xs sm:text-sm text-text-secondary hover:text-primary transition-colors">
                  {clinicInfo.email}
                </a>
              </div>
              
              <div className="pt-4 border-t border-border mt-4">
                <h4 className="text-sm font-bold text-text-primary mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Clinic Location
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {clinicInfo.address}
                </p>
              </div>
            </div>

            <div className="bg-surface rounded-3xl p-6 border border-border shadow-xs">
              <h3 className="text-lg font-bold font-heading text-text-primary mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white text-primary flex items-center justify-center border border-border">
                  <Clock className="w-4 h-4" />
                </div>
                Office Hours
              </h3>
              <div className="space-y-2.5">
                {officeHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-xs sm:text-sm border-b border-border/60 pb-2 last:border-0 last:pb-0">
                    <span className="font-semibold text-text-primary">{item.day}</span>
                    <span className={`${item.hours === 'Closed' ? 'text-red-500 font-semibold' : 'text-text-secondary'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
