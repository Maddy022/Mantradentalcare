"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSuccess(false);
    try {
      // Simulate submission network delay for static hosting
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Contact submission received:", data);
      setSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-border">
      <h3 className="text-2xl font-bold font-heading text-text-primary mb-2">Send Us a Message</h3>
      <p className="text-text-secondary text-sm mb-6">
        Fill out the form below and our front desk will get back to you promptly.
      </p>
      
      {success && (
        <div className="mb-6 p-4 bg-surface border border-primary/30 text-primary rounded-2xl font-medium text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-primary" />
          <span>Thank you! Your message has been received. We will contact you shortly.</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="w-full px-4 py-3 text-base sm:text-sm rounded-xl border border-border bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition"
            placeholder="e.g. Rahul Sharma"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              className="w-full px-4 py-3 text-base sm:text-sm rounded-xl border border-border bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition"
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-1.5">
              Phone Number
            </label>
            <input
              {...register("phone")}
              id="phone"
              type="tel"
              className="w-full px-4 py-3 text-base sm:text-sm rounded-xl border border-border bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition"
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-1.5">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className="w-full px-4 py-3 text-base sm:text-sm rounded-xl border border-border bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition resize-none"
            placeholder="Tell us about your dental concern or appointment preference..."
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 mt-2 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
