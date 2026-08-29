import Link from "next/link";
import { Treatment } from "@/lib/data";
import { Calendar, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface TreatmentCardProps {
  treatment: Treatment;
}

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  const initial = treatment.name.charAt(0).toUpperCase();

  const getBadge = (cat: string) => {
    switch (cat) {
      case "general":
        return { text: "Preventive", color: "bg-emerald-50 text-emerald-700 border-emerald-200" };
      case "restorative":
        return { text: "Restorative", color: "bg-teal-50 text-teal-700 border-teal-200" };
      case "cosmetic":
        return { text: "Aesthetics", color: "bg-amber-50 text-amber-700 border-amber-200" };
      case "orthodontics":
        return { text: "Alignment", color: "bg-cyan-50 text-cyan-700 border-cyan-200" };
      default:
        return { text: "Specialty", color: "bg-surface text-primary border-border" };
    }
  };

  const badge = getBadge(treatment.category);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-border hover:border-primary flex flex-col h-full group hover:-translate-y-1">
      <div className="flex items-center justify-between mb-5">
        <div className="w-14 h-14 rounded-2xl bg-surface text-primary flex items-center justify-center font-extrabold text-xl font-heading border border-border group-hover:bg-primary group-hover:text-white transition-all shadow-xs">
          {initial}
        </div>
        <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${badge.color}`}>
          {badge.text}
        </span>
      </div>

      <h3 className="text-xl font-bold font-heading text-text-primary mb-2.5 group-hover:text-primary transition-colors leading-snug">
        {treatment.name}
      </h3>
      
      <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
        {treatment.description}
      </p>

      <div className="pt-5 border-t border-border mt-auto flex items-center justify-between">
        <span className="text-xs font-semibold text-text-secondary flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Guaranteed Quality
        </span>
        
        <Link 
          href="/book-appointment" 
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-dark group-hover:translate-x-0.5 transition-all"
        >
          <span>Book Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
