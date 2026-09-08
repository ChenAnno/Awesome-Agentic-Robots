import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: 'Survey on Multimodal Embodied Agents: A Unified Capability-Centric Perspective from Digital Task Automation to Physical Robotic Autonomy',
  description: 'A unified capability-centric perspective from digital task automation to physical robotic autonomy.',
  icons: { icon: '/favicon-show.png' },
  openGraph: {
    title: 'Survey on Multimodal Embodied Agents: A Unified Capability-Centric Perspective from Digital Task Automation to Physical Robotic Autonomy',
    description: 'A unified capability-centric perspective from digital task automation to physical robotic autonomy.',
    images: [{ url: '/og.png', width: 1728, height: 910, alt: 'PAPAV survey' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Survey on Multimodal Embodied Agents: A Unified Capability-Centric Perspective from Digital Task Automation to Physical Robotic Autonomy',
    description: 'A unified capability-centric perspective from digital task automation to physical robotic autonomy.',
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
