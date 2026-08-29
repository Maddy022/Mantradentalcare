"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, MessageSquareQuote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function TestimonialsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;

  return (
    <section className="py-20 bg-surface/50 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-3 border border-border">
              <MessageSquareQuote className="w-4 h-4" /> Patient Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary font-heading mb-3">
              What Our Patients Say
            </h2>
            <div className="flex items-center gap-3 text-text-secondary">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-text-primary">{averageRating.toFixed(1)} / 5.0</span>
              <span className="text-sm">({testimonials.length} Verified Reviews)</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-3 rounded-full bg-white shadow-xs border border-border text-text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface hover:text-primary transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-3 rounded-full bg-white shadow-xs border border-border text-text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-surface hover:text-primary transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="min-w-[300px] max-w-[350px] sm:min-w-[400px] shrink-0 bg-white rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all border border-border snap-start flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {testimonial.source === 'google' && (
                    <span className="text-xs font-semibold bg-surface text-primary px-3 py-1 rounded-full border border-border">
                      Google Review
                    </span>
                  )}
                </div>
                
                <p className="text-text-secondary italic mb-6 leading-relaxed text-base">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
                <div className="w-11 h-11 rounded-full bg-surface text-primary flex items-center justify-center font-bold font-heading border border-border">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-text-primary">{testimonial.name}</div>
                  <div className="text-xs text-text-secondary">{testimonial.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:text-left">
          <Link
            href="/reviews"
            className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center gap-1 group"
          >
            See All Reviews
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
