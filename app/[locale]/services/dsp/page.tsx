import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'خدمات الدعم المباشر' : 'DSP / Attendant Care Services',
    description: isAr
      ? 'خدمات متخصص دعم مباشر في سكاپوس، أوريغون لمساعدة الأفراد على الازدهار في منازلهم ومجتمعاتهم.'
      : 'Direct Support Professional services in Scappoose, Oregon helping individuals with IDD thrive in their homes and communities.',
  };
}

const SERVICE_KEYS = ['s0', 's1', 's2', 's3', 's4', 's5', 's6'] as const;

export default async function DSPPage() {
  const t = await getTranslations('dsp');

  return (
    <>
      {/* ── Page Header ───────────────────────────────────────── */}
      <section
        className="section-py section-px relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #3c3c28 0%, #64643c 100%)' }}
        aria-label="Page header"
      >
        <div className="container-lg relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Our Services</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-secondary mb-4">
            {t('headline')}
          </h1>
          <p className="text-secondary/65 max-w-2xl text-lg leading-relaxed">{t('subheadline')}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 Q720 0 1440 40 L1440 40 Z" fill="#FBF4ED" />
          </svg>
        </div>
      </section>

      {/* ── What is a DSP + Our Approach ─────────────────────── */}
      <section className="section-py section-px bg-secondary" aria-labelledby="dsp-intro-heading">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* What is a DSP */}
            <div className="card-warm p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#FBF4ED', color: '#C8A06E' }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 id="dsp-intro-heading" className="font-display text-2xl font-semibold text-dark mb-3">
                {t('whatIsDsp.title')}
              </h2>
              <div className="accent-bar" />
              <p className="text-mid leading-relaxed">{t('whatIsDsp.body')}</p>
            </div>

            {/* Our Approach */}
            <div className="card-warm p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#FBF4ED', color: '#3C3C28' }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-semibold text-dark mb-3">
                {t('approach.title')}
              </h2>
              <div className="accent-bar" />
              <p className="text-mid leading-relaxed">{t('approach.body')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Provided ─────────────────────────────────── */}
      <section className="section-py section-px bg-white" aria-labelledby="services-provided-heading">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Day-to-Day Support</p>
              <h2 id="services-provided-heading" className="font-display text-4xl font-light text-dark mb-2">
                {t('services.title')}
              </h2>
              <div className="accent-bar" />
              <ul className="service-list mt-2">
                {SERVICE_KEYS.map((key) => (
                  <li key={key}>
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-mid">{t(`services.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              {/* Service Types */}
              <div className="card-warm p-7">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#FBF4ED', color: '#C8A06E' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-dark mb-2">{t('serviceTypes.title')}</h3>
                <p className="text-sm text-mid leading-relaxed">{t('serviceTypes.body')}</p>
              </div>

              {/* Service Area */}
              <div className="card-warm p-7">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#FBF4ED', color: '#3C3C28' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-dark mb-2">{t('serviceArea.title')}</h3>
                <p className="text-sm text-mid leading-relaxed">{t('serviceArea.body')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        className="section-py section-px relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3C3C28 0%, #555540 100%)' }}
        aria-label="Call to action"
      >
        <div className="container-md text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl font-light text-secondary mb-6">
            {t('cta')}
          </h2>
          <Link href="/contact" className="btn-accent">
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}
