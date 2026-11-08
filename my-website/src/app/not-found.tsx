import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center bg-[var(--background)] px-6 py-24">
      <div className="w-full max-w-xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-[0_16px_40px_rgb(0_0_0/_0.08)] sm:p-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          404 — Page Not Found
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
          This page isn&apos;t available yet
        </h1>
        <p className="mb-8 text-base leading-[1.7] text-[var(--text-muted)]">
          The blog is coming soon. In the meantime, head back to the homepage.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-light)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
