import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Cormorant_Garamond, DM_Sans, Noto_Sans_Arabic } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { COMPANY } from '@/lib/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-arabic',
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  const isAr = locale === 'ar';
  const title = isAr
    ? `كوزي غروف — دار رعاية ومتخصصو دعم مباشر في سكاپوس، أوريغون`
    : `${COMPANY.name} — 24-Hour Care Home & DSP Services in Scappoose, OR`;
  const description = isAr
    ? 'دار رعاية معتمدة على مدار 24 ساعة وخدمات متخصص دعم مباشر في سكاپوس، أوريغون. رعاية إنسانية ومؤهلة للأفراد ذوي الإعاقات الذهنية والنمائية.'
    : 'Family-owned care home and DSP services in Scappoose, Oregon. Compassionate, qualified support for individuals with intellectual and developmental disabilities.';

  return {
    title: {
      default: title,
      template: `%s | ${COMPANY.name}`,
    },
    description,
    openGraph: {
      type: 'website',
      siteName: COMPANY.name,
      title,
      description,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
    },
    metadataBase: new URL('https://cozygrovecare.com'),
    alternates: {
      languages: {
        en: '/en',
        ar: '/ar',
      },
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const fontClass = `${cormorant.variable} ${dmSans.variable} ${notoArabic.variable}`;

  return (
    <html lang={locale} dir={dir} className={fontClass}>
      <body className="min-h-screen flex flex-col antialiased">
        <NextIntlClientProvider>
          <a href="#main-content" className="skip-link">
            {locale === 'ar' ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
