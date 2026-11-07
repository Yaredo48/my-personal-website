'use client';

import React, { useState } from 'react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Mail, Linkedin as LinkedIn, Code, Send } from 'lucide-react';
import { profile } from '@/data/profile';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
          Let's collaborate on your next AI project
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
              Let's Build Something Amazing Together
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              I'm always interested in hearing about new projects, research collaborations, and opportunities in AI engineering. Whether you have a question or just want to say hi, feel free to reach out.
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
                <LinkedIn className="w-6 h-6" />
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
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
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
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
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
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="Project inquiry"
                  />
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
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
};
