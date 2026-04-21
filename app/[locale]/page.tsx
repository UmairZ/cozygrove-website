import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/navigation';
import { COMPANY } from '@/lib/constants';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr
      ? 'الرئيسية — كوزي غروف'
      : `${COMPANY.name} — Compassionate Care in Scappoose, OR`,
  };
}

const ICON_FAMILY = (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const ICON_CREDENTIAL = (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);
const ICON_PERSON = (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const ICON_BILINGUAL = (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
  </svg>
);

const ICONS = [ICON_FAMILY, ICON_CREDENTIAL, ICON_PERSON, ICON_BILINGUAL];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('home');

  const diffKeys = [0, 1, 2, 3] as const;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="hero-bg min-h-[92vh] flex flex-col justify-center relative" aria-label="Hero">
        <div className="container-lg section-px py-24 relative z-10">
          <div className="max-w-2xl">
            {/* Tagline pill */}
            <div className="animate-fade-in inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-accent/40 text-accent/90">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Scappoose, Oregon
            </div>

            <h1
              className="animate-fade-in-up delay-100 font-display text-5xl sm:text-6xl lg:text-7xl font-light text-secondary leading-[1.05] mb-6 whitespace-pre-line"
              style={{ letterSpacing: '-0.01em' }}
            >
              {t('hero.headline')}
            </h1>

            <p className="animate-fade-in-up delay-200 text-lg text-secondary/75 max-w-xl leading-relaxed mb-10">
              {t('hero.subheadline')}
            </p>

            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
              <Link href="/services" className="btn-accent">
                {t('hero.cta1')}
              </Link>
              <Link href="/contact" className="btn-outline-cream">
                {t('hero.cta2')}
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative leaf */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M350 380 Q200 200 50 380" stroke="#C8A06E" strokeWidth="2" fill="none" />
            <path d="M350 350 Q300 150 100 100 Q50 350 350 350Z" fill="#C8A06E" />
            <path d="M200 380 Q220 200 180 100" stroke="#FBF4ED" strokeWidth="1.5" fill="none" />
            <path d="M200 280 Q240 240 280 200" stroke="#FBF4ED" strokeWidth="1" fill="none" />
            <path d="M200 320 Q160 280 120 240" stroke="#FBF4ED" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
            <path d="M0 60 Q360 0 720 40 Q1080 80 1440 20 L1440 60 Z" fill="#FBF4ED" />
          </svg>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────────── */}
      <section className="section-py section-px bg-secondary" aria-labelledby="mission-heading">
        <div className="container-md text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">{t('mission.title')}</p>
          <h2
            id="mission-heading"
            className="font-display text-3xl sm:text-4xl font-light text-dark mb-6 italic"
            style={{ lineHeight: 1.3 }}
          >
            &ldquo;{t('mission.body')}&rdquo;
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto" />
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section className="section-py section-px bg-white" aria-labelledby="why-heading">
        <div className="container-lg">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Our Difference</p>
            <h2 id="why-heading" className="font-display text-4xl sm:text-5xl font-light text-dark">
              {t('differentiators.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diffKeys.map((i) => (
              <div key={i} className="card-warm p-6 flex flex-col">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ backgroundColor: '#FBF4ED', color: '#C8A06E' }}
                >
                  {ICONS[i]}
                </div>
                <h3 className="font-display text-xl font-semibold text-dark mb-2">
                  {t(`differentiator${i}Title`)}
                </h3>
                <p className="text-sm text-mid leading-relaxed">
                  {t(`differentiator${i}Body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ─────────────────────────────────── */}
      <section className="section-py section-px bg-secondary" aria-labelledby="services-heading">
        <div className="container-lg">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">What We Offer</p>
            <h2 id="services-heading" className="font-display text-4xl sm:text-5xl font-light text-dark">
              {t('services.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Care Home card */}
            <div className="card-warm overflow-hidden">
              <div
                className="h-3 w-full"
                style={{ background: 'linear-gradient(90deg, #3C3C28, #64643C)' }}
                aria-hidden="true"
              />
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#FBF4ED', color: '#3C3C28' }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold text-dark mb-3">
                  {t('services.careHomeTitle')}
                </h3>
                <p className="text-mid leading-relaxed mb-6">{t('services.careHomeBody')}</p>
                <Link href="/services/care-home" className="btn-olive text-sm">
                  {t('services.careHomeCta')} →
                </Link>
              </div>
            </div>

            {/* DSP card */}
            <div className="card-warm overflow-hidden">
              <div
                className="h-3 w-full"
                style={{ background: 'linear-gradient(90deg, #C8A06E, #D4B080)' }}
                aria-hidden="true"
              />
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#FBF4ED', color: '#C8A06E' }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold text-dark mb-3">
                  {t('services.dspTitle')}
                </h3>
                <p className="text-mid leading-relaxed mb-6">{t('services.dspBody')}</p>
                <Link href="/services/dsp" className="btn-accent text-sm">
                  {t('services.dspCta')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section
        className="section-py section-px relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3C3C28 0%, #555540 100%)' }}
        aria-label="Call to action"
      >
        <div className="container-md text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl font-light text-secondary mb-3">
            {t('ctaBanner.headline')}
          </h2>
          <p className="text-secondary/70 mb-8 text-lg">{t('ctaBanner.subheadline')}</p>
          <Link href="/contact" className="btn-accent">
            {t('ctaBanner.cta')}
          </Link>
        </div>
        {/* Decorative */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full border border-accent" style={{ transform: 'translate(-50%, -50%)' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border border-accent" style={{ transform: 'translate(50%, 50%)' }} />
        </div>
      </section>

      {/* ── JSON-LD Structured Data ────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: COMPANY.name,
            description:
              '24-hour certified care home and DSP services for individuals with intellectual and developmental disabilities.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Scappoose',
              addressRegion: 'OR',
              addressCountry: 'US',
            },
            telephone: COMPANY.phoneRaw,
            email: COMPANY.email,
            areaServed: 'Scappoose, Oregon',
          }),
        }}
      />
    </>
  );
}
