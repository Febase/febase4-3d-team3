import { useGLTF } from '@react-three/drei';
import { useFrame, useGraph } from '@react-three/fiber';
import { forwardRef, useImperativeHandle } from 'react';

import type { RenderCallback } from '@react-three/fiber';
import type { Group, Material } from 'three';

export interface CakeModelRef {
  scene: Group | null;
  materials: Record<string, Material>;
}

interface CakeModelProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  renderCallback?: RenderCallback;
}

const CakeModel = forwardRef<CakeModelRef, CakeModelProps>(
  ({ scale, position, rotation, renderCallback = () => {} }, ref) => {
    const { scene } = useGLTF('/models/scene.gltf', true);
    const { materials } = useGraph(scene);

    useFrame(renderCallback);

    useImperativeHandle(ref, () => ({ scene, materials }), [scene, materials]);

    return (
      <group scale={scale} position={position} rotation={rotation}>
        <primitive object={scene} />
      </group>
    );
  }
);

CakeModel.displayName = 'CakeModel';

export default CakeModel;
