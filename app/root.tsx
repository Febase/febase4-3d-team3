import {
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { AppLayout } from '~/layouts';
import { fontLinks, globalLinks } from '~/utils/links';

import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import type { FC } from 'react';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: '3d team3',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [...fontLinks, ...globalLinks];

const App: FC = () => {
  return (
    <AppLayout lang={'ko'}>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </AppLayout>
  );
};

export default App;
