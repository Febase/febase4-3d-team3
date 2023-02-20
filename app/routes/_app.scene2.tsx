import { useState } from 'react';

import Option from '~/components/scene2/Option';
import options from '~/components/scene2/options';
import Preview from '~/components/scene2/Preview';
import SceneContainer from '~/components/scene2/SceneContainer';
import Selector from '~/components/scene2/Selector';
import Title from '~/components/scene2/Title';

import type { FC } from 'react';

const Scene2: FC = () => {
  const [selectedId, setSelectedId] = useState('type1');
  return (
    <SceneContainer>
      <Title />
      <Preview selectedId={selectedId} />
      <Selector>
        {Object.keys(options).map((option) => (
          <Option
            key={option}
            typeId={option}
            onClick={() => setSelectedId(option)}
          />
        ))}
      </Selector>
    </SceneContainer>
  );
};

export default Scene2;
