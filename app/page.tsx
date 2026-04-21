import { redirect } from 'next/navigation';

// This page is unreachable in production — the next-intl middleware intercepts
// all requests to "/" and redirects to "/en". This exists as a fallback.
export default function RootPage() {
  redirect('/en');
}
