import { useNavigate } from '@remix-run/react';

import type { FC } from 'react';
import SceneContainer from '~/components/scene2/SceneContainer';
import Title from '~/components/scene2/Title';

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
