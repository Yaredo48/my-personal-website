'use client';

import React, { useState } from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { profile } from '@/data/profile';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';
import { ContactIcon, type ContactMethod } from '@/components/ui/ContactIcon';

const contactLinks: { href: string; icon: ContactMethod; label: ContactMethod; value: string }[] = [
  { href: `tel:${profile.phone}`, icon: 'Phone', label: 'Phone', value: profile.phone },
  { href: `mailto:${profile.email}`, icon: 'Email', label: 'Email', value: profile.email },
];

const inputClass = (hasError: boolean) =>
  cn(
    'w-full rounded-xl border bg-[var(--background)] px-4 py-3.5 text-sm text-[var(--foreground)] placeholder:text-[var(--text-subtle)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/15',
    hasError ? 'border-red-500 focus:border-red-500' : 'border-[var(--border)] focus:border-[var(--primary)]'
  );

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email format';
    if (!formData.subject.trim()) e.subject = 'Subject is required';
    if (!formData.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Section id="contact" background="secondary">
      <SectionHeader>
        <SectionLabel>Get in touch</SectionLabel>
        <SectionTitle>Let&apos;s Build Something Together</SectionTitle>
        <SectionSubtitle>
          I&apos;m always open to new projects, research collaborations, and opportunities in AI engineering.
        </SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
      >
        {/* Contact links */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          {contactLinks.map(({ href, icon, label, value }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:shadow-[0_8px_24px_rgb(0_0_0/_0.07)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
                <ContactIcon name={icon} className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">{label}</p>
                <p className="mt-0.5 break-all text-sm font-medium text-[var(--foreground)]">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div variants={fadeUp}>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={inputClass(!!errors[id])}
                    />
                    {errors[id] && <p className="mt-1 text-xs text-red-500">{errors[id]}</p>}
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className={inputClass(!!errors.subject)}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project…"
                  className={cn(inputClass(!!errors.message), 'resize-none')}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
