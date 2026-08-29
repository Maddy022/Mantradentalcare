"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { testimonials, clinicInfo } from "@/lib/data";
import { ReviewCard } from "@/components/ReviewCard";
import { Star, MessageSquareQuote, Calendar, ExternalLink, Filter } from "lucide-react";

export default function ReviewsPage() {
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const ratingStats = [
    { stars: "5 Star", percent: 94, count: 125 },
    { stars: "4 Star", percent: 6, count: 8 },
    { stars: "3 Star", percent: 0, count: 0 },
    { stars: "2 Star", percent: 0, count: 0 },
    { stars: "1 Star", percent: 0, count: 0 },
  ];

  const filteredReviews = filterRating === null
    ? testimonials
    : testimonials.filter((t) => t.rating === filterRating);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner with Patient Smile Background & Jade Overlay */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center py-16 sm:py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2000&q=80"
            alt="Patient Smile Transformations"
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
            <MessageSquareQuote className="w-3.5 h-3.5 text-emerald-300" /> 100% Verified Mavdi Branch Google Reviews (133 Reviews)
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading mb-4 tracking-tight drop-shadow-xs">
            Patient Stories & Reviews
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Real experiences from individuals and families treated exclusively at our premier Mavdi Branch in Crystal Heaven Complex, Rajkot.
          </p>
        </div>
      </section>

      {/* Aggregate Rating & Google Card Strip */}
      <section className="py-12 sm:py-16 px-4 bg-white border-b border-border shadow-xs">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Score Column */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-extrabold text-text-primary font-heading">5.0</span>
                  <span className="text-lg text-text-secondary font-bold">/ 5.0</span>
                </div>
                
                <div className="flex text-amber-400 text-xl mt-2 gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-xs sm:text-sm text-text-secondary mt-2 font-medium">
                  Based on 133 verified Google reviews for Mavdi Branch, Rajkot
                </p>

                <a 
                  href={clinicInfo.googleBusinessUrl || `https://www.google.com/search?q=${encodeURIComponent(clinicInfo.name + " " + clinicInfo.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-dark"
                >
                  <span>Leave a Review on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Star distribution bars */}
              <div className="md:col-span-8 space-y-2.5">
                {ratingStats.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm">
                    <span className="w-14 font-semibold text-text-secondary">{item.stars}</span>
                    <div className="flex-1 h-3 rounded-full bg-white border border-border overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                    <span className="w-10 text-right font-bold text-text-primary">{item.count}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Grid of Reviews with Filter Tabs */}
      <section className="py-16 sm:py-24 px-4 container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-surface px-4 py-1.5 rounded-full border border-border">
              Verified Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-heading mt-2">
              What People Say About Their Care
            </h2>
          </div>

          {/* Rating filter buttons */}
          <div className="flex items-center gap-2 bg-surface p-1.5 rounded-full border border-border shrink-0">
            <button
              onClick={() => setFilterRating(null)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filterRating === null
                  ? "bg-primary text-white shadow-xs"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              All ({testimonials.length})
            </button>
            <button
              onClick={() => setFilterRating(5)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                filterRating === 5
                  ? "bg-primary text-white shadow-xs"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>5 Stars</span>
              <span className="text-[10px] opacity-80">({testimonials.filter(t => t.rating === 5).length})</span>
            </button>
            <button
              onClick={() => setFilterRating(4)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                filterRating === 4
                  ? "bg-primary text-white shadow-xs"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <span>4 Stars</span>
              <span className="text-[10px] opacity-80">({testimonials.filter(t => t.rating === 4).length})</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((testimonial) => (
            <ReviewCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark py-16 sm:py-20 px-4 text-center text-white">
        <div className="container mx-auto max-w-2xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Experience the Mantra Difference
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            Join our growing family of happy, smiling patients in {clinicInfo.city}.
          </p>
          <div className="pt-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3.5 px-8 rounded-full transition-all shadow-lg text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4 text-primary" /> Book Your Appointment Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
