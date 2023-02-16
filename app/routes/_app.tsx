import { Outlet } from '@remix-run/react';

import { SceneLayout } from '~/layouts';

import type { FC } from 'react';

const Index: FC = () => {
  return (
    <SceneLayout>
      <Outlet />
    </SceneLayout>
  );
};

export default Index;
