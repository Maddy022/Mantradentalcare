"use client";

import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

interface CalendlyEmbedProps {
  url: string;
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[700px] w-full bg-surface rounded-xl flex items-center justify-center text-text-secondary">Loading booking widget...</div>;
  }

  try {
    return (
      <div className="calendly-wrapper w-full rounded-xl overflow-hidden shadow-sm border border-border">
        <InlineWidget 
          url={url} 
          styles={{ height: '700px', minWidth: '320px' }} 
          pageSettings={{ 
            backgroundColor: 'ffffff', 
            primaryColor: '0D7A5F', 
            textColor: '0F2922' 
          }} 
        />
      </div>
    );
  } catch (e) {
    // Fallback if InlineWidget fails
    return (
      <div className="p-8 text-center bg-white rounded-xl shadow-sm border border-border">
        <p className="mb-4 text-text-primary font-medium">Unable to load booking widget directly.</p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/90"
        >
          Book via Calendly
        </a>
      </div>
    );
  }
}
