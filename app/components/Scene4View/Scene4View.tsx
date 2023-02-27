import { useSearchParams } from '@remix-run/react';
import { useRef } from 'react';

import Cake3D from '~/components/Cake3D';
import { ClientOnly } from '~/components/common';

import * as styles from './Scene4View.css';
import ShareButton from './ShareButton';

import type { FC } from 'react';
import type { Cake3DFrameCallback, Cake3DRef } from '~/components/Cake3D';

const Scene4View: FC = () => {
  const ref = useRef<Cake3DRef>(null);
  const [searchParams] = useSearchParams();
  const letterTo = searchParams.get('to') ?? '';

  const handleFrame: Cake3DFrameCallback = () => {
    const scene = ref.current?.scene ?? null;
    if (scene === null) return;

    const mesh = scene.children[0];

    mesh.rotateZ(0.001);
  };

  return (
    <div className={styles.layout}>
      <Cake3D title={`To. ${letterTo}`} onFrame={handleFrame} ref={ref} />
      <ClientOnly>
        <ShareButton />
      </ClientOnly>
    </div>
  );
};

export default Scene4View;
