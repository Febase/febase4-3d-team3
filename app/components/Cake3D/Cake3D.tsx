import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { forwardRef, Suspense } from 'react';

import { ClientOnly } from '~/components/common';

import * as styles from './Cake3D.css';
import CakeModel from './CakeModel';

import type { RenderCallback } from '@react-three/fiber';
import type { CakeModelRef } from './CakeModel';

export type Cake3DFrameCallback = RenderCallback;

export interface Cake3DProps {
  title: string;
  onFrame?: Cake3DFrameCallback;
  lettering?: string;
}

export type Cake3DRef = CakeModelRef;

const Cake3D = forwardRef<Cake3DRef, Cake3DProps>(
  ({ title, lettering, onFrame }, ref) => {
    return (
      <div className={styles.box}>
        <span className={styles.title}>{title}</span>
        <hr className={styles.divider} />
        <div className={styles.canvasBox}>
          <ClientOnly>
            <Canvas
              camera={{
                position: [0, 3.5, 5],
                fov: 75,
                near: 0.1,
                far: 100,
              }}
            >
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1.5} />
              <Suspense fallback={null}>
                <CakeModel
                  lettering={lettering}
                  scale={0.6}
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  renderCallback={onFrame}
                  ref={ref}
                />
              </Suspense>
            </Canvas>
          </ClientOnly>
        </div>
      </div>
    );
  }
);

Cake3D.displayName = 'Cake3D';

export default Cake3D;
