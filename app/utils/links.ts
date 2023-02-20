import { cssBundleHref } from '@remix-run/css-bundle';

import fontStyles from '~/styles/fonts.css';
import normalizeStyles from '~/styles/normalize.css';

import type { LinksFunction } from '@remix-run/cloudflare';

export const globalLinks: ReturnType<LinksFunction> = [
  {
    rel: 'stylesheet',
    href: normalizeStyles,
  },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export const fontLinks: ReturnType<LinksFunction> = [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Emilys+Candy&display=swap',
  },
  {
    rel: 'stylesheet',
    href: fontStyles,
  },
];
