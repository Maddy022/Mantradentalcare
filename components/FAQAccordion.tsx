"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ } from "@/lib/data";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-white border-primary shadow-md"
                : "bg-white border-border hover:border-primary/50 shadow-2xs"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                    isOpen ? "bg-primary text-white" : "bg-surface text-primary"
                  }`}
                >
                  Q
                </div>
                <span className="font-bold text-sm sm:text-base text-text-primary font-heading">
                  {faq.question}
                </span>
              </div>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? "bg-surface text-primary rotate-180" : "text-text-secondary"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-text-secondary leading-relaxed border-t border-border/50 animate-in fade-in duration-200">
                <p className="pl-10">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
