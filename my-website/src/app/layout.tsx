import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yared Asfaw | Senior AI Engineer & Software Engineer',
  description:
    'I architect, engineer, and deploy scalable AI solutions that transform complex challenges into intelligent products. Specializing in Machine Learning, Deep Learning, Generative AI, RAG Systems, and Agentic AI.',
  keywords: ['AI Engineer', 'Software Engineer', 'Machine Learning', 'Deep Learning', 'Generative AI', 'LLM', 'RAG', 'Agentic AI', 'MLOps'],
  authors: [{ name: 'Yared Asfaw' }],
  openGraph: {
    title: 'Yared Asfaw | Senior AI Engineer & Software Engineer',
    description: 'Building Intelligent Systems. Engineering the Future.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        {/* Single global background video — fixed, behind all content */}
        <video
          className="site-bg-video"
          src="/media/ai-network.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="site-bg-overlay" aria-hidden="true" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
