import { Outlet } from '@remix-run/react';

import { Container } from '~/components/common';

import type { FC } from 'react';

const Index: FC = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Index;
