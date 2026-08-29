"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryImages, galleryCategories } from "@/lib/data";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Camera, Sparkles, ImagePlus, Calendar } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Hero Section with Dental Operatory Background Photo & Jade Gradient */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center py-16 sm:py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
            alt="Mantra Dental Care Clinic Facility"
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
            <Camera className="w-3.5 h-3.5 text-emerald-300" /> Clinic Portfolio & Virtual Tour
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading mb-4 tracking-tight drop-shadow-xs">
            Our Gallery
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of our modern clinic facility, see our dental technology in action, and explore real smile transformations.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Notice Banner */}
          <div className="mb-10 max-w-3xl mx-auto bg-surface border border-primary/20 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 border border-border shadow-2xs">
                <ImagePlus className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-text-primary text-sm">Custom Photo Upload Ready</h4>
                <p className="text-xs text-text-secondary mt-0.5">
                  Send your clinic photos, doctor portraits, or patient cases anytime to update these slots.
                </p>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === "all"
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-text-primary border border-border hover:border-primary hover:text-primary shadow-2xs"
              }`}
            >
              All Photos
            </button>
            {galleryCategories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 capitalize cursor-pointer ${
                  activeCategory === category.key
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-text-primary border border-border hover:border-primary hover:text-primary shadow-2xs"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grid of Photo Placeholders / Images */}
          {filteredImages.length > 0 ? (
            <GalleryGrid images={filteredImages} />
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-border">
              <Camera className="w-12 h-12 text-primary/40 mx-auto mb-3" />
              <p className="text-text-primary font-bold text-lg">No photos in this category yet</p>
              <p className="text-text-secondary text-sm mt-1">Upload your images to showcase them here.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface border-t border-border py-16 sm:py-20 px-4 text-center mt-12">
        <div className="container mx-auto max-w-3xl space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-text-primary">
            Visit Our Clinic in Person
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Experience our comfortable lounge, state-of-the-art operatory, and gentle care firsthand.
          </p>
          <div className="pt-2">
            <Link 
              href="/book-appointment" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4" /> Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
