import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: 'PAPAV — When Agents Enter the Physical World',
  description: 'A unified capability-centric survey of multimodal agents, robotic systems, and multimodal embodied agents.',
  icons: { icon: '/favicon-show.png' },
  openGraph: {
    title: 'PAPAV — When Agents Enter the Physical World',
    description: 'A unified capability-centric survey across digital and physical worlds.',
    images: [{ url: '/og.png', width: 1728, height: 910, alt: 'PAPAV survey' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAPAV — When Agents Enter the Physical World',
    description: 'A unified capability-centric survey across digital and physical worlds.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
