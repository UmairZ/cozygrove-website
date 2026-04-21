'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link, usePathname } from '@/lib/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close services dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinkClass = (href: string) =>
    `text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-accent ${
      pathname === href ? 'text-accent' : 'text-secondary/80'
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_24px_-4px_rgba(0,0,0,0.4)]' : ''
      }`}
      style={{ backgroundColor: '#282814' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-lg section-px">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-accent/30 group-hover:ring-accent/60 transition-all duration-200">
              <Image
                src="/logo.png"
                alt="Cozy Grove logo"
                fill
                className="object-cover"
                sizes="44px"
                priority
              />
            </div>
            <span
              className="font-display text-xl font-semibold hidden sm:block"
              style={{ color: '#FBF4ED' }}
            >
              Cozy Grove
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            <Link href="/" className={navLinkClass('/')}>
              {t('home')}
            </Link>
            <Link href="/about" className={navLinkClass('/about')}>
              {t('about')}
            </Link>

            {/* Services dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-accent ${
                  pathname.startsWith('/services') ? 'text-accent' : 'text-secondary/80'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                {t('services')}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`nav-dropdown ${servicesOpen ? 'open' : ''}`} role="menu">
                <Link
                  href="/services/care-home"
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-secondary/80 hover:text-accent hover:bg-white/5 transition-colors"
                  role="menuitem"
                >
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {t('careHome')}
                </Link>
                <Link
                  href="/services/dsp"
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-secondary/80 hover:text-accent hover:bg-white/5 transition-colors"
                  role="menuitem"
                >
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t('dsp')}
                </Link>
              </div>
            </div>

            <Link href="/contact" className={navLinkClass('/contact')}>
              {t('contact')}
            </Link>
          </div>

          {/* Right side: language + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <LanguageSwitcher />
            <Link href="/contact" className="btn-accent text-sm py-2.5 px-5">
              {t('cta')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-secondary transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-secondary transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-secondary transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[32rem]' : 'max-h-0'}`}
        style={{ backgroundColor: '#1e1e0e' }}
      >
        <div className="container-lg section-px pb-6 pt-2 flex flex-col gap-1">
          <Link href="/" className="px-3 py-3 rounded-lg text-secondary/80 hover:text-accent hover:bg-white/5 font-semibold text-sm transition-colors">
            {t('home')}
          </Link>
          <Link href="/about" className="px-3 py-3 rounded-lg text-secondary/80 hover:text-accent hover:bg-white/5 font-semibold text-sm transition-colors">
            {t('about')}
          </Link>
          <div className="px-3 py-2">
            <p className="text-xs font-bold uppercase tracking-widest text-mid/60 mb-1">{t('services')}</p>
            <Link href="/services/care-home" className="block py-2 text-secondary/80 hover:text-accent text-sm font-medium transition-colors">
              → {t('careHome')}
            </Link>
            <Link href="/services/dsp" className="block py-2 text-secondary/80 hover:text-accent text-sm font-medium transition-colors">
              → {t('dsp')}
            </Link>
          </div>
          <Link href="/contact" className="px-3 py-3 rounded-lg text-secondary/80 hover:text-accent hover:bg-white/5 font-semibold text-sm transition-colors">
            {t('contact')}
          </Link>
          <div className="mt-3 pt-4 border-t border-white/10 flex items-center justify-between">
            <LanguageSwitcher className="text-secondary/70" />
            <Link href="/contact" className="btn-accent text-sm py-2.5 px-5">
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
