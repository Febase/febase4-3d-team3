import { cssBundleHref } from '@remix-run/css-bundle';
import normalizeStyles from 'modern-normalize/modern-normalize.css';

import globalStyles from '~/styles/global.css';

import type { LinksFunction } from '@remix-run/cloudflare';

export const globalLinks: ReturnType<LinksFunction> = [
  {
    rel: 'stylesheet',
    href: normalizeStyles,
  },
  {
    rel: 'stylesheet',
    href: globalStyles,
  },
  ...(cssBundleHref
    ? [{ rel: 'stylesheet', href: cssBundleHref }]
    : []),
];
