import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QueryProvider from '@/lib/providers/query-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    default: 'Mercedes Benz W202 Club Indonesia',
    template: '%s | Mercedes Benz W202 Club Indonesia',
  },
  description:
    'Mercedes-Benz W202 Club Indonesia adalah komunitas pecinta Mercedes-Benz seri W202 di Indonesia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mercedes-Benz W202 Club Indonesia',
    url: 'https://mbw202club.id',
    logo: 'https://mbw202club.id/logo.png',
    description: 'Mercedes-Benz W202 Club Indonesia adalah komunitas pecinta Mercedes-Benz seri W202 di Indonesia.',
    sameAs: [
      'https://instagram.com/mbw202club',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@mbw202club.id',
      contactType: 'Customer Service',
      availableLanguage: 'Indonesian',
    },
  }

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans`}
      >
        <QueryProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
