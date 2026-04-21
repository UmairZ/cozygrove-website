import type { ReactNode } from 'react';

// Root layout — the actual <html> and <body> are rendered in app/[locale]/layout.tsx
// This wrapper is required by Next.js App Router to exist at the app root.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
