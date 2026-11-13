import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return {
    title: isAr ? 'من نحن' : 'About Us',
    description: isAr
      ? 'تعرف على قصة كوزي غروف وفريقنا وقيمنا'
      : 'Learn about the Cozy Grove story, our team, and our values.',
  };
}

const VALUE_ICONS = [
  // Dignity
  <svg key="dignity" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>,
  // Honesty
  <svg key="honesty" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Independence
  <svg key="independence" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Community
  <svg key="community" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
];

const QUAL_KEYS = ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;
const VALUE_KEYS = ['v0', 'v1', 'v2', 'v3'] as const;

export default async function AboutPage() {
  const t = await getTranslations('about');

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
            {t('title')}
          </h1>
          <p className="text-secondary/65 max-w-xl text-lg leading-relaxed">{t('subtitle')}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 40 Q720 0 1440 40 L1440 40 Z" fill="#FBF4ED" />
          </svg>
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────────── */}
      <section className="section-py section-px bg-secondary" aria-labelledby="story-heading">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Our Background</p>
              <h2 id="story-heading" className="font-display text-4xl sm:text-5xl font-light text-dark mb-6">
                {t('story.title')}
              </h2>
              <div className="accent-bar" />
              <div className="flex flex-col gap-5 text-mid leading-relaxed">
                <p>{t('story.p1')}</p>
                <p>{t('story.p2')}</p>
                <p>{t('story.p3')}</p>
              </div>
            </div>

            {/* Visual accent block */}
            <div className="relative hidden lg:block" aria-hidden="true">
              <div
                className="absolute inset-0 rounded-2xl opacity-10"
                style={{ background: 'linear-gradient(135deg, #3C3C28, #C8A06E)' }}
              />
              <div
                className="relative rounded-2xl p-10 border border-accent/20"
                style={{ backgroundColor: '#f5ede2' }}
              >
                <div className="font-display text-7xl font-light text-primary/20 mb-4" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="font-display text-2xl font-light italic text-primary leading-relaxed">
                  What started as a calling has become a company built on real-world experience and an unwavering commitment.
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-accent" />
                  <span className="text-sm font-semibold text-mid">Cozy Grove Founders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Team ──────────────────────────────────────────── */}
      <section className="section-py section-px bg-white" aria-labelledby="team-heading">
        <div className="container-lg">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Qualifications</p>
            <h2 id="team-heading" className="font-display text-4xl sm:text-5xl font-light text-dark">
              {t('team.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-mid leading-relaxed mb-4">{t('team.body')}</p>
            </div>

            <div className="card-warm p-8">
              <h3 className="font-display text-xl font-semibold text-dark mb-5">
                Team Qualifications
              </h3>
              <ul className="flex flex-col gap-3">
                {QUAL_KEYS.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm text-mid pb-3 border-b border-primary/5 last:border-0 last:pb-0">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {t(`team.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ────────────────────────────────────────── */}
      <section className="section-py section-px bg-secondary" aria-labelledby="values-heading">
        <div className="container-lg">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">What Drives Us</p>
            <h2 id="values-heading" className="font-display text-4xl sm:text-5xl font-light text-dark">
              {t('values.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUE_KEYS.map((key, i) => (
              <div key={key} className="card-warm p-7 flex gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#FBF4ED', color: '#C8A06E' }}
                >
                  {VALUE_ICONS[i]}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-dark mb-1.5">
                    {t(`values.${key}Title`)}
                  </h3>
                  <p className="text-sm text-mid leading-relaxed">{t(`values.${key}Body`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
