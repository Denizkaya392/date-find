import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'tr'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = request.headers.get('accept-language')?.split(',')?.[0].split('-')[0] || defaultLocale;
    const finalLocale = locales.includes(locale) ? locale : defaultLocale;

    // e.g. incoming request is /products
    // The new URL is /en/products
    return NextResponse.redirect(
      new URL(`/${finalLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}; 