import { Canvas } from '@react-three/fiber';
import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { FC, useEffect } from 'react';
import * as styles from './Preview.css';
import * as THREE from 'three';
import Cake from './Cake';
const Preview: FC = ({}) => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      className={styles.previewBox}
    >
      <OrbitControls makeDefault />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} />
      <Center>
        <Cake />
      </Center>
    </Canvas>
  );
};
export default Preview;
