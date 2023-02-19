import { useNavigate } from '@remix-run/react';

import type { FC } from 'react';
import Preview from '~/components/scene2/Preview';
import SceneContainer from '~/components/scene2/SceneContainer';
import Title from '~/components/scene2/Title';

const Scene2: FC = () => {

  return (
   <SceneContainer>
      <Preview/>
      
    </SceneContainer>
  );
};

export default Scene2;
