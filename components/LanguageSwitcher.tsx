'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/navigation';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-accent ${className}`}
      aria-label={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <span className={locale === 'en' ? 'text-accent' : 'text-secondary/60'}>EN</span>
      <span className="text-secondary/40 mx-0.5">|</span>
      <span className={locale === 'ar' ? 'text-accent' : 'text-secondary/60'}>عربي</span>
    </button>
  );
}
