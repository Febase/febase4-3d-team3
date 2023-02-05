import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import normalizeStyles from 'modern-normalize/modern-normalize.css';

import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import type { FC } from 'react';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: '3d team3',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: normalizeStyles,
  },
];

const App: FC = () => {
  return (
    <html lang='ko'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default App;
