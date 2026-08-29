"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Stethoscope, Calendar } from "lucide-react";
import { navLinks, clinicInfo } from "@/lib/data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-border/50"
          : "bg-white py-4 sm:py-5 border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-surface text-primary flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-white transition-all shadow-xs">
            <Stethoscope className="w-5 h-5 transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg sm:text-xl text-text-primary tracking-tight leading-tight">
              Mantra <span className="text-primary">Dental Care</span>
            </span>
            <span className="text-[10px] text-text-secondary font-medium tracking-wider uppercase">
              Clinic & Implant Centre
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-all py-1 border-b-2 ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-text-primary border-transparent hover:text-primary hover:border-primary-light"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Phone (Desktop / Laptop) */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-2 text-text-primary hover:text-primary transition-colors text-sm font-semibold"
          >
            <div className="w-8 h-8 rounded-full bg-surface text-primary flex items-center justify-center border border-border">
              <Phone className="w-4 h-4" />
            </div>
            <span>{clinicInfo.phone}</span>
          </a>
          
          <Link
            href="/book-appointment"
            className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm rounded-full px-6 py-2.5 transition-all shadow-sm hover:shadow-md inline-flex items-center gap-1.5"
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </Link>
        </div>

        {/* Mobile Actions: Phone button + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
            className="w-10 h-10 rounded-xl bg-surface text-primary flex items-center justify-center border border-border active:scale-95 transition-transform"
            aria-label="Call clinic"
          >
            <Phone className="w-4 h-4" />
          </a>
          
          <button
            className="w-10 h-10 rounded-xl bg-surface text-text-primary flex items-center justify-center border border-border active:scale-95 transition-transform"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5 text-text-primary" />
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border bg-surface/40">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
              <Stethoscope className="w-4 h-4" />
            </div>
            <span className="font-heading font-bold text-base text-text-primary">
              Mantra Dental Care
            </span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center text-text-secondary hover:text-primary active:scale-95"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-3">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? "text-white bg-primary shadow-xs"
                        : "text-text-primary hover:bg-surface"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className={`text-xs ${isActive ? "text-white/80" : "text-text-secondary"}`}>→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-5 border-t border-border flex flex-col gap-3 bg-surface/50">
          <a
            href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
            className="flex items-center justify-center gap-2 text-text-primary font-semibold py-3 px-4 rounded-xl bg-white border border-border text-sm shadow-2xs"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>{clinicInfo.phone}</span>
          </a>
          <Link
            href="/book-appointment"
            className="bg-primary text-white text-center rounded-xl px-4 py-3.5 font-bold text-sm shadow-md hover:bg-primary-dark transition-colors inline-flex items-center justify-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
