'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Section, SectionHeader, SectionLabel, SectionTitle } from '@/components/ui/Section';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const testimonials = [
  {
    quote:
      'Yared turns complex technical ideas into practical solutions with creativity and dedication.',
    name: 'Yakob Dereje',
    role: 'Software Engineer',
    image: '/media/testimonials/yakob.jpg',
  },
  {
    quote:
      'Yared brings creativity, collaboration, and a strong commitment to quality to software development.',
    name: 'Besufikad Lema',
    role: 'Odo Developer',
    image: '/media/testimonials/besu.jpeg',
  },
  {
    quote:
      'Yared is a thoughtful problem-solver who is committed to learning and building effective solutions.',
    name: 'Yohanes Dereje',
    role: 'Software Engineer',
    image: '/media/testimonials/yohanes.jpeg',
  },
  {
    quote:
      'Yared’s curiosity and problem-solving skills help turn challenging ideas into meaningful solutions.',
    name: 'Nahome Addisu',
    role: 'Electrical Engineer',
    image: '/media/testimonials/sample-profile-4.svg',
  },
  {
    quote:
      'Yared combines analytical thinking and determination to build thoughtful, high-quality solutions.',
    name: 'Yordanos Habtamu',
    role: 'Software Engineer',
    image: '/media/testimonials/yordi.jpeg',
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
      </SectionHeader>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
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
                          alt={`Illustrative avatar for ${testimonial.name}; not a photograph`}
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
