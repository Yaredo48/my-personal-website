import Image from 'next/image';
import { ArrowUpRight, Mail } from 'lucide-react';
import { ContactIcon, type ContactMethod } from '@/components/ui/ContactIcon';
import { profile } from '@/data/profile';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Research', href: '#research' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks: { href: string; icon: ContactMethod; label: string }[] = [
  { href: profile.linkedin, icon: 'LinkedIn', label: 'LinkedIn' },
  { href: profile.github, icon: 'GitHub', label: 'GitHub' },
  { href: profile.twitter, icon: 'X', label: 'X / Twitter' },
  { href: profile.telegram, icon: 'Telegram', label: 'Telegram' },
  { href: profile.instagram, icon: 'Instagram', label: 'Instagram' },
  { href: profile.facebook, icon: 'Facebook', label: 'Facebook' },
];

export const Footer = () => {
  return (
    <footer className="section-secondary relative overflow-hidden border-t border-[var(--border)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-44 h-[28rem] w-[28rem] rounded-full opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 68%)' }}
      />
      <div className="container relative py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.82fr)] lg:items-end lg:gap-16">
          <div>
            <a href="#home" className="inline-flex items-center gap-3 text-[var(--foreground)]">
              <Image
                src="/media/yaredpp.jpg"
                alt=""
                width={56}
                height={56}
                sizes="56px"
                className="h-14 w-14 rounded-full border-2 border-[var(--primary)] object-cover object-[center_22%] shadow-[0_6px_20px_color-mix(in_srgb,var(--primary)_22%,transparent)]"
              />
              <span>
                <span className="block font-heading text-lg font-bold tracking-[-0.04em]">
                  {profile.name}
                </span>
                <span className="mt-0.5 block text-sm font-medium text-[var(--text-muted)]">
                  AI Engineer <span className="px-1 text-[var(--primary)]">·</span> Software Engineer
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              Turning ambitious ideas into useful, intelligent products. Let&apos;s make something
              meaningful together.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${label}`}
                  className="social-icon-link group flex h-11 w-11 items-center justify-center rounded-xl border text-[var(--foreground)] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:shadow-[0_8px_20px_color-mix(in_srgb,var(--primary)_24%,transparent)]"
                >
                  <ContactIcon name={icon} className="h-5 w-5 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[#211344] p-6 text-white shadow-[0_20px_50px_color-mix(in_srgb,var(--primary)_22%,transparent)] sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-1 -top-7 h-32 w-32 rounded-full border border-white/10"
            />
            <div className="relative">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Have a project in mind?
              </p>
              <h2 className="max-w-md font-heading text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl">
                Let&apos;s build what&apos;s next.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                Get in touch to talk about AI, software engineering, research, or your next big idea.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-6 inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#3d247a] shadow-lg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Start a conversation
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="mt-12 border-t border-[var(--border)] pt-6">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 md:justify-start md:gap-x-7">
            {footerLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--primary)] focus-visible:text-[var(--primary)]"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-[var(--text-subtle)]">
            © {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--primary)]"
          >
            Back to top <ArrowUpRight className="h-4 w-4 -rotate-45" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
