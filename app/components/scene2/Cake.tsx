import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useEffect } from 'react';
import * as THREE from 'three';
const cylinderGeometry = new THREE.CylinderGeometry(10, 10, 8, 40);
const material = new THREE.MeshMatcapMaterial();
export default function Cake() {
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  return (
    <group>
      <Text3D
        material={material}
        font='./fonts/Dancing_Script_Regular.json'
        size={0.2}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[0.4, 0.02, -0.4]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      >
        {`Happy\nValentines\nDay!`}
      </Text3D>
      <mesh
        position={[0, 0, 0]}
        material={material}
        geometry={cylinderGeometry}
      >
        <cylinderGeometry args={[0.8, 0.8, 0.4, 40]} />
      </mesh>
    </group>
  );
}
