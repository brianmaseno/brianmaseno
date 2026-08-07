import type { Metadata } from 'next';
import { Syne, Outfit } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Brian Maseno Mayoga | Lead Mobile & Web Developer',
  description:
    'Lead Mobile Developer and Web Developer specializing in Flutter, Laravel, Next.js, and cloud-integrated applications. Portfolio of Brian Maseno Mayoga.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body className="page-grain font-sans">{children}</body>
    </html>
  );
}
