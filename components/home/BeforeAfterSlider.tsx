"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
      setSliderPosition(percent);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 bg-white border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Features */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-surface text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-border">
              <Sparkles className="w-4 h-4 text-primary" /> Real Patient Results
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary font-heading leading-tight tracking-tight">
              See The Smile Transformation
            </h2>
            
            <p className="text-base text-text-secondary leading-relaxed">
              Drag the interactive slider to compare clinical results. Using custom porcelain veneers, laser whitening, and clear aligners, our specialists craft natural, luminous smiles.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: "Laser Teeth Whitening", desc: "Up to 8 shades lighter in a single 45-minute session." },
                { title: "Custom Porcelain Veneers", desc: "Fix chips, gaps, and discoloration permanently." },
                { title: "Clear Aligners / Invisalign", desc: "Discreet alignment for teens and adults." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-surface/60 border border-border">
                  <h4 className="font-bold text-text-primary text-sm">{item.title}</h4>
                  <p className="text-xs text-text-secondary mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark group"
              >
                <span>View Full Smile Gallery (12+ Cases)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Before/After Comparison */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 select-none">
              
              <div
                ref={containerRef}
                className="relative h-[340px] sm:h-[420px] md:h-[480px] w-full cursor-ew-resize overflow-hidden"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
              >
                {/* AFTER Image (Full background) */}
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85"
                  alt="After Smile Transformation"
                  fill
                  className="object-cover object-center pointer-events-none"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                
                {/* AFTER Label */}
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg z-20 pointer-events-none">
                  AFTER: Radiant Smile
                </div>

                {/* BEFORE Image (Clipped overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none z-10"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative h-full w-[100vw] lg:w-[700px]">
                    <Image
                      src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85"
                      alt="Before Smile Transformation"
                      fill
                      className="object-cover object-center pointer-events-none filter saturate-50 contrast-95"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>

                {/* BEFORE Label */}
                <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg z-20 pointer-events-none">
                  BEFORE Treatment
                </div>

                {/* Drag Divider Line */}
                <div
                  className="absolute top-0 bottom-0 z-30 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                  
                  {/* Circular Drag Handle */}
                  <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl border-2 border-primary flex items-center justify-center text-primary">
                    <MoveHorizontal className="w-5 h-5 animate-pulse" />
                  </div>
                </div>

              </div>

              {/* Slider Footer Caption */}
              <div className="bg-[#09221B] text-white p-4 px-6 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-emerald-200">
                  ✨ Case #104: Full Porcelain Veneer Makeover
                </span>
                <span className="text-white/60">
                  ↔️ Drag handle to compare
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
