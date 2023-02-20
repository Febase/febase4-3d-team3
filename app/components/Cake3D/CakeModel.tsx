import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { forwardRef, useImperativeHandle } from 'react';

import type { RenderCallback } from '@react-three/fiber';
import type { Group } from 'three';

export type CakeModelRef = Group | null;

interface CakeModelProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  renderCallback?: RenderCallback;
}

const CakeModel = forwardRef<CakeModelRef, CakeModelProps>(
  (
    {
      scale,
      position,
      rotation,
      renderCallback = () => {},
    },
    ref,
  ) => {
    const { scene } = useGLTF('/models/scene.gltf', true);

    useFrame(renderCallback);

    useImperativeHandle(ref, () => scene, [scene]);

    return (
      <group scale={scale} position={position} rotation={rotation} ref={ref}>
        <primitive object={scene} />
      </group>
    );
  }
);

CakeModel.displayName = 'CakeModel';

export default CakeModel;
