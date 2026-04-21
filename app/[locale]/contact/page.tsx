import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { COMPANY } from '@/lib/constants';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'اتصل بنا' : 'Contact Us',
    description: isAr
      ? 'تواصل مع كوزي غروف للحصول على معلومات حول خدماتنا أو لتقديم إحالة.'
      : 'Get in touch with Cozy Grove to learn about our services or to make a referral.',
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('contact');
  const isAr = locale === 'ar';

  return (
    <>
      {/* ── Page Header ───────────────────────────────────────── */}
      <section
        className="section-py section-px relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #282814 0%, #3c3c28 100%)' }}
        aria-label="Page header"
      >
        <div className="container-lg relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Cozy Grove</p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-secondary mb-4">
            {t('headline')}
          </h1>
          <p className="text-secondary/65 max-w-xl text-lg leading-relaxed">{t('subheadline')}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 Q720 0 1440 40 L1440 40 Z" fill="#FBF4ED" />
          </svg>
        </div>
      </section>

      {/* ── Contact Info + Form ───────────────────────────────── */}
      <section className="section-py section-px bg-secondary" aria-labelledby="contact-info-heading">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2 id="contact-info-heading" className="font-display text-3xl font-light text-dark mb-6 sr-only">
                  Contact Information
                </h2>

                {/* Info cards */}
                <div className="flex flex-col gap-4">
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="card-warm p-5 flex items-start gap-4 group"
                    aria-label={`Call us at ${COMPANY.phone}`}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FBF4ED', color: '#C8A06E' }}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-0.5">{t('phoneLabel')}</p>
                      <p className="font-semibold text-dark group-hover:text-accent transition-colors">{COMPANY.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="card-warm p-5 flex items-start gap-4 group"
                    aria-label={`Email us at ${COMPANY.email}`}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FBF4ED', color: '#C8A06E' }}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-0.5">{t('emailLabel')}</p>
                      <p className="font-semibold text-dark group-hover:text-accent transition-colors break-all">{COMPANY.email}</p>
                    </div>
                  </a>

                  <div className="card-warm p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FBF4ED', color: '#C8A06E' }}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-0.5">{t('locationLabel')}</p>
                      <p className="font-semibold text-dark">{COMPANY.location}</p>
                    </div>
                  </div>

                  <div className="card-warm p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FBF4ED', color: '#C8A06E' }}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-accent mb-0.5">{t('hoursLabel')}</p>
                      <p className="font-semibold text-dark">{isAr ? COMPANY.hoursAr : COMPANY.hoursEn}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bilingual note */}
              <div
                className="rounded-xl p-5 border border-accent/25"
                style={{ backgroundColor: '#f0e8d8' }}
              >
                <p className="font-display text-2xl font-light italic text-primary mb-1">
                  {t('bilingualArabic')}
                </p>
                <p className="text-sm text-mid">{t('bilingualNote')}</p>
              </div>

              {/* Referral note */}
              <p className="text-sm text-mid/70 leading-relaxed border-s-2 border-accent/40 ps-4">
                {t('referralNote')}
              </p>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="card-warm p-8">
                <h2 className="font-display text-2xl font-semibold text-dark mb-6">
                  {t('formTitle')}
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
