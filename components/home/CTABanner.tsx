import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { clinicInfo } from "@/lib/data";

export function CTABanner() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary-dark py-16 sm:py-20 text-center px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <span className="inline-block bg-white/20 backdrop-blur-sm text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Personalized Dental Care
        </span>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight leading-tight">
          Ready to Transform Your Smile?
        </h2>
        
        <p className="text-sm sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          Schedule your consultation today. We offer flexible scheduling, instant digital bookings, and comfortable, modern dental care.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/book-appointment"
            className="w-full sm:w-auto bg-white text-primary hover:bg-surface font-bold px-8 py-3.5 sm:py-4 rounded-full transition-all duration-200 text-sm sm:text-base shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </Link>
          
          <a
            href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-8 py-3.5 sm:py-4 rounded-full transition-colors text-sm sm:text-base backdrop-blur-sm"
          >
            <Phone className="w-4 h-4" /> Call {clinicInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
