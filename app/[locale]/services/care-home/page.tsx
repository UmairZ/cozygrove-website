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
    title: isAr ? 'دار الرعاية على مدار 24 ساعة' : '24-Hour Certified Care Home',
    description: isAr
      ? 'دار رعاية معتمدة في سكاپوس، أوريغون توفر رعاية على مدار الساعة للأفراد ذوي الإعاقات الذهنية والنمائية.'
      : 'Certified 24-hour care home in Scappoose, Oregon providing around-the-clock support for individuals with intellectual and developmental disabilities.',
  };
}

const SERVICE_KEYS = ['s0', 's1', 's2', 's3', 's4', 's5', 's6'] as const;

export default async function CareHomePage() {
  const t = await getTranslations('careHome');
  const beds = COMPANY.bedsAvailable;

  return (
    <>
      {/* ── Page Header ───────────────────────────────────────── */}
      <section
        className="section-py section-px relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #282814 0%, #3c3c28 100%)' }}
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

      {/* ── Availability badge ────────────────────────────────── */}
      <section className="section-px py-8 bg-secondary">
        <div className="container-lg">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 font-semibold text-sm"
            style={{ borderColor: '#C8A06E', color: '#3C3C28', backgroundColor: '#FFF9F4' }}
            aria-label={`Availability: ${beds} beds available`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" aria-hidden="true" />
            {t('availability.badge', { beds })}
          </div>
        </div>
      </section>

      {/* ── What We Offer + Our Home ──────────────────────────── */}
      <section className="section-py section-px bg-secondary" aria-labelledby="offer-heading">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* What We Offer */}
            <div className="card-warm p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#FBF4ED', color: '#3C3C28' }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 id="offer-heading" className="font-display text-2xl font-semibold text-dark mb-3">
                {t('whatWeOffer.title')}
              </h2>
              <div className="accent-bar" />
              <p className="text-mid leading-relaxed">{t('whatWeOffer.body')}</p>
            </div>

            {/* Our Home */}
            <div className="card-warm p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#FBF4ED', color: '#C8A06E' }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-semibold text-dark mb-3">
                {t('ourHome.title')}
              </h2>
              <div className="accent-bar" />
              <p className="text-mid leading-relaxed">{t('ourHome.body')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Included ─────────────────────────────────── */}
      <section className="section-py section-px bg-white" aria-labelledby="services-included-heading">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Comprehensive Care</p>
              <h2 id="services-included-heading" className="font-display text-4xl font-light text-dark mb-2">
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

            {/* Who We Serve */}
            <div
              className="rounded-2xl p-8 border border-accent/20"
              style={{ backgroundColor: '#f7f0e6' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#FBF4ED', color: '#3C3C28' }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-semibold text-dark mb-3">
                {t('whoWeServe.title')}
              </h2>
              <div className="accent-bar" />
              <p className="text-mid leading-relaxed">{t('whoWeServe.body')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Current Availability ──────────────────────────────── */}
      <section className="section-py section-px bg-secondary" aria-labelledby="availability-heading">
        <div className="container-md text-center">
          <h2 id="availability-heading" className="font-display text-3xl font-light text-dark mb-4">
            {t('availability.title')}
          </h2>
          <p className="text-mid text-lg mb-2">{t('availability.body', { beds })}</p>
          <p className="text-sm text-mid/60 mb-8">
            Contact us to discuss placement, insurance, and next steps.
          </p>
          <Link href="/contact" className="btn-olive">
            {t('cta')} →
          </Link>
        </div>
      </section>
    </>
  );
}
