import { redirect } from '@remix-run/cloudflare';

import type { LoaderFunction } from '@remix-run/cloudflare';
import type { FC } from 'react';

export const loader: LoaderFunction = () => {
  return redirect('/scene1');
};

const AppIndex: FC = () => {
  return null;
};

export default AppIndex;
