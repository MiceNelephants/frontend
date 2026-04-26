// src/app/layout.js

import './globals.css';

export const metadata = {
  title: 'Mice & Elephants — Privacy-first neutral relay',
  description: 'A digital shield for individuals and businesses. Navigate the marketplace, gather intelligence, and deal with the big players without leaving a permanent trail.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Mice & Elephants',
    description: 'Your email address is a private conversation. Not a public lead.',
    url: 'https://miceandelephants.com',
    siteName: 'Mice & Elephants',
    locale: 'en_HK',
    type: 'website',
    images: [
      {
        url: 'https://miceandelephants.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mice & Elephants — Privacy-first neutral relay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mice & Elephants',
    description: 'Your email address is a private conversation. Not a public lead.',
    images: ['https://miceandelephants.com/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}