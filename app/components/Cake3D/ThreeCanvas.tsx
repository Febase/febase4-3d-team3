import { Canvas } from '@react-three/fiber';
import { forwardRef, Suspense } from 'react';

import CakeModel from './CakeModel';

import type { Group } from 'three';

type ThreeCanvasRef = Group | null;

const ThreeCanvas = forwardRef<ThreeCanvasRef>(
  (_, ref) => {
    return (
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
        />
        <Suspense fallback={null}>
          <CakeModel
            scale={0.5}
            position={[0, 0.5, 0]}
            rotation={[Math.PI * 5 / 16, -Math.PI / 2, 0]}
            ref={ref}
          />
        </Suspense>
      </Canvas>
    );
  }
);

ThreeCanvas.displayName = 'ThreeCanvas';

export default ThreeCanvas;
