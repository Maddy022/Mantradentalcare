import Link from "next/link";
import Image from "next/image";
import { Doctor, clinicInfo } from "@/lib/data";
import { Award, Calendar, Phone, Stethoscope, UserCheck } from "lucide-react";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const initials = doctor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const isVisiting = Boolean(doctor.isVisiting);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-border hover:border-primary flex flex-col h-full group hover:-translate-y-1">
      {/* Doctor Photo Header */}
      <div className="relative h-64 sm:h-72 w-full bg-surface overflow-hidden">
        {doctor.image ? (
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary via-primary to-primary-dark flex items-center justify-center text-white text-4xl font-bold font-heading">
            {initials}
          </div>
        )}
        
        {/* Subtle gradient vignette at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
        
        {/* Role Badge (Top Right) */}
        <div className="absolute top-3 right-3">
          {isVisiting ? (
            <span className="inline-flex items-center gap-1.5 bg-amber-500/95 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-xs">
              <Stethoscope className="w-3.5 h-3.5" /> Visiting Doctor
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 bg-primary/95 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-xs">
              <UserCheck className="w-3.5 h-3.5" /> Resident Chief Doctor
            </span>
          )}
        </div>

        {/* Experience badge (Bottom Left) */}
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-primary-dark text-xs font-bold px-3 py-1 rounded-full shadow-md">
          <Award className="w-3.5 h-3.5 text-primary" /> {doctor.experience}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-heading text-text-primary group-hover:text-primary transition-colors">
          {doctor.name}
        </h3>
        <p className="text-xs font-bold uppercase tracking-wider text-primary mt-1">{doctor.title}</p>
        <p className="text-sm font-semibold text-text-secondary mt-0.5">{doctor.specialty}</p>

        <p className="text-sm text-text-secondary mt-4 line-clamp-3 leading-relaxed">
          {doctor.bio}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {doctor.qualifications.map((qual, idx) => (
            <span
              key={idx}
              className="bg-surface text-primary border border-border text-xs px-2.5 py-1 rounded-full font-medium"
            >
              {qual}
            </span>
          ))}
        </div>

        {/* Action Button Section */}
        <div className="pt-6 mt-auto">
          {isVisiting ? (
            <div className="space-y-2">
              <a
                href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="w-full bg-surface hover:bg-primary hover:text-white text-primary border border-primary/30 font-bold py-3 rounded-xl transition-all text-center inline-flex items-center justify-center gap-2 shadow-xs text-sm"
              >
                <Phone className="w-4 h-4" /> Call for Visiting Schedule
              </a>
              <p className="text-[11px] text-text-secondary text-center">
                Visiting Consultant • Consultations by prior scheduled appointment via reception
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <Link
                href="/book-appointment"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all text-center inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm"
              >
                <Calendar className="w-4 h-4" /> Book Appointment
              </Link>
              <p className="text-[11px] text-emerald-700 text-center font-medium">
                ● Resident Doctor • Available for daily online booking
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
