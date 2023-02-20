import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function CakeElement(props: JSX.IntrinsicElements['mesh']) {
  const gltf = useGLTF('/models/scene.gltf', true);
  useFrame((state, delta, frame) => {
    const mesh = gltf.scene.children[0];
    mesh.rotateX(0.001);
    // mesh.rotation.x = mesh.rotation.y += 0.001;
    // mesh.rotation.x = mesh.rotation.z += 0.001;
    // mesh.rotation.x = state.clock.getElapsedTime();
  });

  return <primitive object={gltf.scene} scale={0.35} />;
}
