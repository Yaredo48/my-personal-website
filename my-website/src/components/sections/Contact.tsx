'use client';

import React, { useState } from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Mail, Link, Code, Send } from 'lucide-react';
import { profile } from '@/data/profile';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="contact">
      <SectionHeader>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Let&apos;s collaborate on your next AI project
        </SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-2 gap-12"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              I&apos;m always interested in hearing about new projects, research collaborations, and opportunities in AI engineering. Whether you have a question or just want to say hi, feel free to reach out.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--primary)] transition-colors group"
            >
              <div className="p-3 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">Email</p>
                <p className="font-medium text-[var(--foreground)]">{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--primary)] transition-colors group"
            >
              <div className="p-3 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                <Link className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">LinkedIn</p>
                <p className="font-medium text-[var(--foreground)]">Connect with me</p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--primary)] transition-colors group"
            >
              <div className="p-3 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">GitHub</p>
                <p className="font-medium text-[var(--foreground)]">View my work</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-[var(--border)]'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500' : 'border-[var(--border)]'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all ${
                      errors.subject ? 'border-red-500' : 'border-[var(--border)]'
                    }`}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-[var(--border)]'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
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
