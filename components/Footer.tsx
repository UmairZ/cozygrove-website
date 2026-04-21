import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/lib/navigation';
import { COMPANY } from '@/lib/constants';

export default async function Footer() {
  const t = await getTranslations('footer');
  const tNav = await getTranslations('nav');

  return (
    <footer style={{ backgroundColor: '#282814' }} className="text-secondary/80">
      <div className="container-lg section-px py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-accent/30 group-hover:ring-accent/50 transition-all">
                <Image src="/logo.png" alt="Cozy Grove" fill className="object-cover" sizes="40px" />
              </div>
              <span className="font-display text-lg font-semibold text-secondary">Cozy Grove</span>
            </Link>
            <p className="text-sm text-secondary/60 italic mb-5 max-w-xs">
              {t('tagline')}
            </p>
            {/* Contact info */}
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
                aria-label={`Call ${COMPANY.phone}`}
              >
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {COMPANY.email}
              </a>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {COMPANY.location}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              {t('nav')}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { href: '/', label: tNav('home') },
                { href: '/about', label: tNav('about') },
                { href: '/services/care-home', label: tNav('careHome') },
                { href: '/services/dsp', label: tNav('dsp') },
                { href: '/contact', label: tNav('contact') },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
              Hours
            </h3>
            <p className="text-sm">{COMPANY.hoursEn}</p>
            <p className="text-sm mt-1 opacity-60 font-arabic">{COMPANY.hoursAr}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary/40">
          <p>{t('rights')}</p>
          <p>Scappoose, Oregon</p>
        </div>
      </div>
    </footer>
  );
}
