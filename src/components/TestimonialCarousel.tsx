"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Quote icon */}
      <Quote size={60} className="absolute -top-8 -left-4 text-[var(--gold-muted)] opacity-30" />

      {/* Testimonial content */}
      <div className="relative overflow-hidden min-h-[280px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center px-4"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={
                    i < Math.floor(currentTestimonial.rating)
                      ? "text-[var(--gold)] fill-[var(--gold)]"
                      : i < currentTestimonial.rating
                      ? "text-[var(--gold)] fill-[var(--gold)] opacity-50"
                      : "text-[var(--gold-muted)]"
                  }
                />
              ))}
            </div>

            {/* Review text */}
            <blockquote className="text-xl md:text-2xl text-[var(--foreground)] font-[var(--font-body)] italic leading-relaxed mb-8">
              &ldquo;{currentTestimonial.review}&rdquo;
            </blockquote>

            {/* Author info */}
            <div>
              <div className="font-[var(--font-heading)] text-lg text-[var(--gold)] mb-1">
                {currentTestimonial.name}
              </div>
              <div className="text-sm text-[var(--foreground-muted)]">
                {currentTestimonial.date} • {currentTestimonial.source}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-[var(--gold-muted)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--background)] transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[var(--gold)] w-6"
                  : "bg-[var(--gold-muted)]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-[var(--gold-muted)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--background)] transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

