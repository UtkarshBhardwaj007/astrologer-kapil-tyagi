"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote, Phone, ExternalLink } from "lucide-react";
import { testimonials, averageRating, totalReviews } from "@/data/testimonials";
import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";

export default function ReviewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] mb-6">
              <span className="text-[var(--foreground)]">Client </span>
              <span className="text-gradient-gold">Reviews</span>
            </h1>
            <div className="gold-line w-24 mx-auto mb-6" />
            
            {/* Rating Summary */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={i < Math.round(averageRating) ? "text-[var(--gold)] fill-[var(--gold)]" : "text-[var(--gold-muted)]"}
                  />
                ))}
              </div>
              <span className="text-3xl font-[var(--font-heading)] text-[var(--gold)]">
                {averageRating}
              </span>
            </div>
            <p className="text-[var(--foreground-muted)]">
              Based on {totalReviews}+ reviews from Google, Justdial, and other platforms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 relative"
              >
                <Quote size={40} className="absolute top-4 right-4 text-[var(--gold-muted)] opacity-20" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(testimonial.rating)
                          ? "text-[var(--gold)] fill-[var(--gold)]"
                          : i < testimonial.rating
                          ? "text-[var(--gold)] fill-[var(--gold)] opacity-50"
                          : "text-[var(--gold-muted)]"
                      }
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-[var(--foreground-muted)] italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.review}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="border-t border-[var(--gold-muted)] pt-4">
                  <div className="font-[var(--font-heading)] text-[var(--foreground)]">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-[var(--foreground-muted)]">
                    {testimonial.date} • {testimonial.source}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review Section */}
      <section className="section bg-[var(--background-secondary)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-[var(--font-heading)] mb-4">
                <span className="text-[var(--foreground)]">Share Your </span>
                <span className="text-gradient-gold">Experience</span>
              </h2>
              <div className="gold-line-left w-16 mb-6" />
              <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
                Had a consultation with {SITE_CONFIG.name}? We&apos;d love to hear about 
                your experience! Your feedback helps others make informed decisions 
                and helps us serve you better.
              </p>
              <p className="text-[var(--foreground-muted)] mb-8 leading-relaxed">
                Scan the QR code or click the button below to leave a review on 
                Google Maps.
              </p>
              <a
                href={CONTACT_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Leave a Review on Google
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="card p-8 inline-block">
                <h3 className="font-[var(--font-heading)] text-lg text-[var(--foreground)] mb-4">
                  Scan to Review
                </h3>
                
                {/* QR Code */}
                <div className="w-64 h-64 mx-auto bg-white rounded-lg flex items-center justify-center p-4">
                  <Image
                    src="/images/qrcode.png"
                    alt="QR Code to leave a review on Google Maps"
                    width={240}
                    height={240}
                    className="object-contain"
                  />
                </div>
                
                <p className="text-sm text-[var(--foreground-muted)] mt-4">
                  Point your camera to scan
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-[var(--font-heading)] mb-4">
              <span className="text-[var(--foreground)]">Experience It </span>
              <span className="text-gradient-gold">Yourself</span>
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              Join thousands of satisfied clients who have found guidance and clarity 
              through {SITE_CONFIG.name}&apos;s expert astrological consultations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="btn-gold">
                Book Consultation
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="btn-outline-gold flex items-center gap-2"
              >
                <Phone size={18} />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

