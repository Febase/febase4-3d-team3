import { useNavigate } from '@remix-run/react';

import type { FC } from 'react';

const Scene2: FC = () => {
  const navigate = useNavigate();

  return (
    <span
      style={{
        fontSize: 32,
        lineHeight: 1.5,
        fontWeight: 700,
        color: '#fff',
      }}
    >
      SCENE 2 PLACEHOLDER
      <button onClick={() => navigate('/scene3')}>
        go scene3
      </button>
    </span>
  );
};

export default Scene2;
