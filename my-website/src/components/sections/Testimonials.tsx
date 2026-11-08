'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionSubtitle, SectionTitle } from '@/components/ui/Section';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const testimonials = [
  {
    quote:
      'Working together felt thoughtful and well organized. Complex ideas were made clear, and every detail was handled with care.',
    name: 'Sample client',
    role: 'Product team · Example organization',
    image: '/media/testimonials/sample-profile-1.svg',
  },
  {
    quote:
      'A dependable collaborator who brings curiosity, strong technical judgment, and a real focus on practical outcomes.',
    name: 'Sample collaborator',
    role: 'Engineering · Example organization',
    image: '/media/testimonials/sample-profile-2.svg',
  },
  {
    quote:
      'The work balanced ambitious ideas with a clear, measured approach. Communication stayed open from the first discussion through delivery.',
    name: 'Sample teammate',
    role: 'Research · Example organization',
    image: '/media/testimonials/sample-profile-3.svg',
  },
  {
    quote:
      'A positive partner for challenging projects: responsive, analytical, and always willing to find a thoughtful way forward.',
    name: 'Sample partner',
    role: 'Technology · Example organization',
    image: '/media/testimonials/sample-profile-4.svg',
  },
];

export const Testimonials = () => {
  const testimonialSetRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(40);

  useEffect(() => {
    const testimonialSet = testimonialSetRef.current;
    if (!testimonialSet) return;

    const updateDuration = () => {
      setDuration(testimonialSet.getBoundingClientRect().width / 40);
    };

    const observer = new ResizeObserver(updateDuration);
    observer.observe(testimonialSet);
    updateDuration();
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="testimonials" background="secondary">
      <SectionHeader className="mb-9 md:mb-12">
        <SectionLabel>Kind words</SectionLabel>
        <SectionTitle>Testimonials</SectionTitle>
        <SectionSubtitle>
          A glimpse of the thoughtful collaboration and practical impact I strive to bring to every project.
        </SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.p
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)]" aria-hidden="true" />
          Illustrative placeholders — replace with genuine testimonials before publishing.
        </motion.p>

        <motion.div variants={fadeUp}>
          <div
            className="testimonials-carousel"
            role="region"
            aria-label="Continuously scrolling testimonials"
          >
            <div
              className="testimonials-track"
              style={{ '--testimonial-duration': `${duration}s` } as CSSProperties}
            >
              {[false, true].map((isDuplicate) => (
                <div
                  key={isDuplicate ? 'duplicate-testimonials' : 'testimonials'}
                  ref={isDuplicate ? undefined : testimonialSetRef}
                  className="testimonials-set"
                  aria-hidden={isDuplicate || undefined}
                >
                  {testimonials.map((testimonial, index) => (
                    <article
                      key={`${testimonial.name}-${index}`}
                      className="testimonial-card group flex min-h-[25rem] flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-8 text-center shadow-[0_12px_36px_rgb(0_0_0/_0.035)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgb(0_0_0/_0.08)] sm:px-7"
                    >
                      <div className="relative mb-6 h-[5.25rem] w-[5.25rem] shrink-0 overflow-hidden rounded-full border-[3px] border-[var(--surface)] shadow-[0_0_0_1px_var(--border),0_8px_20px_rgb(0_0_0/_0.08)]">
                        <Image
                          src={testimonial.image}
                          alt="Illustrative placeholder portrait, not a real testimonial author"
                          fill
                          sizes="84px"
                          className="object-cover"
                        />
                      </div>

                      <Quote
                        aria-hidden="true"
                        className="mb-3 h-7 w-7 fill-[var(--primary)]/10 text-[var(--primary)]"
                        strokeWidth={2.5}
                      />
                      <blockquote className="flex flex-1 items-center text-[0.9375rem] leading-[1.8] text-[var(--text-muted)] sm:text-base">
                        <p>
                          <span className="text-[var(--primary)]">&ldquo;</span>
                          {testimonial.quote}
                          <span className="text-[var(--primary)]">&rdquo;</span>
                        </p>
                      </blockquote>

                      <div className="mt-6">
                        <h3 className="font-semibold text-[var(--foreground)]">{testimonial.name}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--text-subtle)]">{testimonial.role}</p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
