import { cssBundleHref } from '@remix-run/css-bundle';

import normalizeStyles from '~/styles/normalize.css';

import type { LinksFunction } from '@remix-run/cloudflare';

export const globalLinks: ReturnType<LinksFunction> = [
  {
    rel: 'stylesheet',
    href: normalizeStyles,
  },
  ...(cssBundleHref
    ? [{ rel: 'stylesheet', href: cssBundleHref }]
    : []),
];
