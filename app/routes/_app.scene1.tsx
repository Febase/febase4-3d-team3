import { StartForm } from '~/components/scene1';

import type { FC } from 'react';

export const handle = {
  offset: 64,
  dir: 'top',
};

const Scene1: FC = () => {
  return (
    <StartForm />
  );
};

export default Scene1;
