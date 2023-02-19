import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import CakeElement from '~/components/Scene4View/CakeElement';

import * as styles from './Scene4View.css';
import ShareButton from '~/components/Scene4View/ShareButton';

const Scene4View = () => {
  return (
    <div className={styles.layout}>
      <h3 className={styles.title}>YOUR CAKE</h3>
      <hr className={styles.divider} />
      <Canvas
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '-200px',
          height: '500px',
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <CakeElement />
        </Suspense>
      </Canvas>
      <ShareButton />
    </div>
  );
};

export default Scene4View;
