"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { clinicInfo } from "@/lib/data";

export function MobileFloatingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-border p-3 px-4 flex items-center gap-3 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <a
        href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
        className="flex-1 bg-surface hover:bg-surface/80 text-primary font-bold py-3 px-4 rounded-xl border border-border flex items-center justify-center gap-2 text-sm transition-transform active:scale-95 shadow-2xs"
      >
        <Phone className="w-4 h-4 text-primary" />
        <span>Call Clinic</span>
      </a>

      <Link
        href="/book-appointment"
        className="flex-[1.4] bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-transform active:scale-95 shadow-md"
      >
        <Calendar className="w-4 h-4 text-white" />
        <span>Book Visit</span>
      </Link>
    </div>
  );
}
