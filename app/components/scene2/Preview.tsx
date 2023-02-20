import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';

import Cake from './Cake';
import * as styles from './Preview.css';

import type { FC } from 'react';
interface PreviewProps {
  selectedId: string;
}
const Preview: FC<PreviewProps> = ({ selectedId }) => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-8, 6, 4],
      }}
      className={styles.previewBox}
    >
      <OrbitControls enableZoom={false} />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Center>
          <Cake typeId={selectedId} />
        </Center>
      </Suspense>
    </Canvas>
  );
};
export default Preview;
