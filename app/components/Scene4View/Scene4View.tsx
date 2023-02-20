import { useRef } from 'react';

import Cake3D from '~/components/Cake3D';

import * as styles from './Scene4View.css';
import ShareButton from './ShareButton';

import type { FC } from 'react';
import type {
  Cake3DFrameCallback,
  Cake3DRef,
} from '~/components/Cake3D';

const Scene4View: FC  = () => {
  const ref = useRef<Cake3DRef>(null);

  const handleFrame: Cake3DFrameCallback = () => {
    const scene = ref.current;
    if (scene === null) return;

    const mesh = scene.children[0];

    mesh.rotateZ(0.001);
  };

  return (
    <div className={styles.layout}>
      <Cake3D
        title={'YOUR CAKE'}
        onFrame={handleFrame}
        ref={ref}
      />
      <ShareButton />
    </div>
  );
};

export default Scene4View;
