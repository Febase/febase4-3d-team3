import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

import options from './options';

interface CakeProps {
  typeId: string;
}

export default function CakeOption({ typeId }: CakeProps) {
  const cylinderGeometry = useMemo(
    () => new THREE.CylinderGeometry(10, 10, 8, 40),
    []
  );
  const material = useMemo(() => new THREE.MeshMatcapMaterial(), []);
  const textMaterial = useMemo(() => new THREE.MeshMatcapMaterial(), []);

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
  }, []);

  return (
    <group>
      <Text3D
        material={textMaterial}
        font='./fonts/Dancing_Script_Regular.json'
        size={0.4}
        height={0.4}
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
        <cylinderGeometry args={[1.6, 1.6, 0.8, 40]} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        position={[0, -0.4, 0]}
        material={material}
        geometry={cylinderGeometry}
      >
        <cylinderGeometry args={[2.4, 2.4, 0.8, 40]} />
      </mesh>
    </group>
  );
}
