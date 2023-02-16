import { useNavigate } from '@remix-run/react';

import type { FC } from 'react';

const Scene3: FC = () => {
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
      SCENE 3 PLACEHOLDER
      <button onClick={() => navigate('/scene4')}>
        go scene 4
      </button>
    </span>
  );
};

export default Scene3;
