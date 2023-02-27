import { Text3D, useGLTF } from '@react-three/drei';
import { useFrame, useGraph } from '@react-three/fiber';
import { forwardRef, useImperativeHandle } from 'react';
import { MeshStandardMaterial } from 'three';

import { LETTERINGS } from '../Scene3View/Scene3View';

import type { RenderCallback } from '@react-three/fiber';
import type { Group, Material } from 'three';

export interface CakeModelRef {
  scene: Group | null;
  materials: Record<string, Material>;
}

interface CakeModelProps {
  lettering?: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  renderCallback?: RenderCallback;
}

const textMaterial = new MeshStandardMaterial({ color: '#fff' });
const CakeModel = forwardRef<CakeModelRef, CakeModelProps>(
  (
    { scale, position, rotation, lettering, renderCallback = () => {} },
    ref
  ) => {
    const { scene } = useGLTF('/models/scene.gltf', true);
    const { materials } = useGraph(scene);
    const letters = lettering ? LETTERINGS[lettering]?.split(' ') : [];

    useFrame(() => renderCallback);

    useImperativeHandle(ref, () => ({ scene, materials }), [scene, materials]);
    return (
      <group scale={scale} position={position} rotation={rotation}>
        {letters?.map((letter, index) => {
          return (
            <Text3D
              key={index}
              material={textMaterial}
              font='./fonts/Dancing_Script_Regular.json'
              curveSegments={12}
              bevelEnabled
              scale={0.8}
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
              position={[-2, 1.2, -1 + (3 / letters.length) * index]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              {letter}
            </Text3D>
          );
        })}
        <primitive object={scene} />
      </group>
    );
  }
);

CakeModel.displayName = 'CakeModel';

export default CakeModel;
