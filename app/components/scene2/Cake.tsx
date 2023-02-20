import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useEffect } from 'react';
import * as THREE from 'three';
import options from './options';
const cylinderGeometry = new THREE.CylinderGeometry(10, 10, 8, 40);
const material = new THREE.MeshMatcapMaterial();
const textMaterial = new THREE.MeshMatcapMaterial();

interface CakeProps {
  typeId: string;
}

export default function Cake({ typeId }: CakeProps) {
  const matcap = options[typeId].matcap;
  const [matcapTexture] = useMatcapTexture(matcap, 256);
  const [textMatcapTexture] = useMatcapTexture(
    'DFD9C2_B5AE92_F9F7EA_C4C4A4',
    256
  );

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;

    textMatcapTexture.encoding = THREE.sRGBEncoding;
    textMatcapTexture.needsUpdate = true;

    textMaterial.matcap = textMatcapTexture;
    textMaterial.needsUpdate = true;
  }, [matcapTexture, textMatcapTexture]);

  return (
    <group>
      <Text3D
        material={textMaterial}
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
        castShadow
        receiveShadow
        position={[0, 0, 0]}
        material={material}
        geometry={cylinderGeometry}
      >
        <cylinderGeometry args={[0.8, 0.8, 0.4, 40]} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        position={[0, -0.4, 0]}
        material={material}
        geometry={cylinderGeometry}
      >
        <cylinderGeometry args={[1.2, 1.2, 0.4, 40]} />
      </mesh>
    </group>
  );
}
