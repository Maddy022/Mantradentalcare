import { clinicInfo } from "@/lib/data";
import { MapPin, Navigation } from "lucide-react";

export function MapEmbed() {
  return (
    <div className="w-full flex flex-col gap-3.5">
      <div className="w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden border border-border bg-surface shadow-xs">
        <iframe
          src={clinicInfo.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mantra Dental Care Location Map"
        ></iframe>
      </div>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-3 bg-white rounded-2xl border border-border">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary">
          <MapPin className="w-4 h-4 text-primary shrink-0" />
          <span className="line-clamp-1">{clinicInfo.address}</span>
        </div>
        <a 
          href={clinicInfo.googleBusinessUrl || `https://maps.google.com/?q=${encodeURIComponent(clinicInfo.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1 shrink-0"
        >
          <Navigation className="w-3.5 h-3.5" /> View on Google Maps / Get Directions
        </a>
      </div>
    </div>
  );
}
