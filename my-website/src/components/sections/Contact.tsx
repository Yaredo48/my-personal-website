'use client';

import React, { useState } from 'react';
import { Section, SectionHeader, SectionLabel, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Mail, Link, Code, Send } from 'lucide-react';
import { profile } from '@/data/profile';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';

const contactLinks = [
  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email', value: profile.email },
  { href: profile.linkedin, icon: Link, label: 'LinkedIn', value: 'Connect with me', external: true },
  { href: profile.github, icon: Code, label: 'GitHub', value: 'View my work', external: true },
];

const inputClass = (hasError: boolean) =>
  cn(
    'w-full rounded-lg border bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--text-subtle)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20',
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
        className="grid gap-10 lg:grid-cols-2"
      >
        {/* Contact links */}
        <motion.div variants={fadeUp} className="space-y-4">
          {contactLinks.map(({ href, icon: Icon, label, value, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all hover:border-[var(--primary)] hover:shadow-sm"
            >
              <div className="rounded-lg bg-[var(--primary)]/10 p-3 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--text-muted)]">{label}</p>
                <p className="text-sm font-semibold text-[var(--foreground)]">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div variants={fadeUp}>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Project inquiry' },
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
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
};
