"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Expand, X, Camera, Sparkles } from "lucide-react";
import { type GalleryImage } from "@/lib/data";

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isExternalUrl = (src: string) => src.startsWith("http://") || src.startsWith("https://");

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
        {images.map((img, index) => {
          const hasImage = isExternalUrl(img.src);

          return (
            <div
              key={img.id}
              onClick={() => hasImage && setSelectedIndex(index)}
              className={`relative group rounded-2xl sm:rounded-3xl overflow-hidden aspect-square border transition-all duration-300 ${
                hasImage
                  ? "cursor-pointer bg-surface border-border shadow-2xs hover:shadow-xl hover:border-primary active:scale-98"
                  : "bg-surface/60 border-dashed border-primary/40 flex flex-col items-center justify-center p-4 text-center"
              }`}
            >
              {hasImage ? (
                <>
                  {/* Real Dental Photograph */}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                  {/* Bottom Gradient for caption readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                  <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white z-10">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full inline-block mb-1 border border-white/20">
                      {img.category.replace("-", " ")}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold line-clamp-1 text-white/95 drop-shadow-xs">
                      {img.alt}
                    </p>
                  </div>
                  
                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 backdrop-blur-xs z-20">
                    <div className="w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Expand size={20} />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-wider">View Full Photo</span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-2 p-2">
                  <div className="w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center border border-border shadow-xs">
                    <Camera className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    {img.category.replace("-", " ")}
                  </span>
                  <p className="text-xs font-semibold text-text-primary line-clamp-2">
                    {img.alt}
                  </p>
                  <span className="text-[10px] text-text-secondary font-medium">
                    Ready for your photo
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden flex flex-col relative shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/75 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-colors z-20 shadow-sm active:scale-95"
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>
            
            {/* Modal Image Area */}
            <div className="relative w-full aspect-4/3 sm:aspect-16/10 bg-slate-900 overflow-hidden">
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
            
            <div className="p-6 bg-white flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-primary bg-surface px-3 py-1 rounded-full border border-border inline-block mb-1">
                  {images[selectedIndex].category.replace("-", " ")}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-text-primary font-heading">
                  {images[selectedIndex].alt}
                </h3>
              </div>

              <button
                onClick={() => setSelectedIndex(null)}
                className="bg-primary hover:bg-primary-dark text-white font-bold text-xs px-5 py-2.5 rounded-full transition-colors shrink-0 shadow-sm"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
