import { Links, Meta } from '@remix-run/react';

import * as styles from './AppLayout.css';

import type { FC, ReactNode } from 'react';

interface AppLayoutProps {
  lang: string;
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ lang, children }) => {
  return (
    <html lang={lang} className={styles.html}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className={styles.body}>{children}</body>
    </html>
  );
};

export default AppLayout;
