import { OrbitControls, OrthographicCamera, Stats, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import type { FC } from 'react';

const ThreeCanvas: FC = () => {
  const { scene } = useGLTF('/gltf/scene.gltf');

  return (
    <Canvas>
      <Suspense fallback={null}>
        <primitive object={scene} />
        <directionalLight
          name={'directional light'}
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-100000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[200, 300, 300]}
        />
        {/*}
        <OrthographicCamera
          name={'orthographic camera'}
          makeDefault={true}
          //position={[0, 0, 0]}
          //position={[446.99, 894.53, -3.61]}
          rotation={[-1.57, 0.46, 1.58]}
          //scale={1}
        />
  */}
        <hemisphereLight
          name={'hemisphere light'}
          intensity={0.75}
          color={'#eaeaea'}
        />
        <OrthographicCamera
          name={'orthographic camera'}
          makeDefault={true}
          position={[446.99, 894.53, -3.61]}
          rotation={[-1.57, 0.46, 1.58]}
          scale={1}
          zoom={25}
        />
        <axesHelper args={[25]} />
        <gridHelper args={[25]} />
        <OrbitControls enableRotate enablePan enableZoom />
        <Stats />
      </Suspense>
    </Canvas>
  );
};

export default ThreeCanvas;

/*
    <>
      <color attach="background" args={['#5e6063']} />
      <group {...props} dispose={null}>
        <group name="scene" position={[1, 0, 0]}>
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]} scale={1}>
                <group name="Text_0" position={[-12.83, 20.61, 25.43]} rotation={[-0.02, 1.57, 0]} scale={1.73}>
                  <mesh
                    name="Object_4"
                    geometry={nodes.Object_4.geometry}
                    material={nodes.Object_4.material}
                    castShadow
                    receiveShadow
                  />
                </group>
                <group name="Spiral000_8" position={[56.38, -19.75, 3.84]} scale={0.3}>
                  <group
                    name="Spiral002_1"
                    position={[-184.79, 0.78, -222.35]}
                    rotation={[-Math.PI, 1.2, -Math.PI]}
                    scale={1}
                  >
                    <mesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={nodes.Object_8.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="Spiral003_2" position={[-200.77, 5.23, 192.07]} rotation={[0.14, 0.01, -0.15]}>
                    <mesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={nodes.Object_10.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Spiral004_3"
                    position={[-406.06, 0, -35.62]}
                    rotation={[-Math.PI, -0.63, -Math.PI]}
                    scale={1}
                  >
                    <mesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={nodes.Object_12.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="Spiral005_4" position={[-57.14, 0, 117.2]} rotation={[0, 1.45, 0]}>
                    <mesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={nodes.Object_14.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="Spiral006_5" position={[-45.14, 3.85, -140.77]} rotation={[2.73, -0.94, 2.79]} scale={1}>
                    <mesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={nodes.Object_16.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="Spiral007_6" position={[-342.24, 0, 147.22]} rotation={[0.14, -1.49, 0.15]} scale={1}>
                    <mesh
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={nodes.Object_18.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group name="Spiral008_7" position={[-342.95, 0, -165.06]} rotation={[Math.PI, -1.38, Math.PI]}>
                    <mesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={nodes.Object_20.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <mesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={nodes.Object_6.material}
                    castShadow
                    receiveShadow
                  />
                </group>
                <group name="Cake_layer_1_29" position={[-4.84, 0, -0.44]} scale={[3.04, 1.21, 3.04]}>
                  <group name="Sphere001_28" position={[16.08, 7.43, -4.11]} scale={[0.06, 0.14, 0.06]}>
                    <group name="Sphere002_11" position={[-47, -51.05, -97.08]}>
                      <mesh
                        name="Object_27"
                        geometry={nodes.Object_27.geometry}
                        material={nodes.Object_27.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group name="Sphere003_12" position={[-116.71, 2.31, -168.01]}>
                      <mesh
                        name="Object_29"
                        geometry={nodes.Object_29.geometry}
                        material={nodes.Object_29.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group name="Sphere004_13" position={[-296.63, 9.37, -227.25]} rotation={[0, 1.12, 0]}>
                      <mesh
                        name="Object_31"
                        geometry={nodes.Object_31.geometry}
                        material={nodes.Object_31.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group name="Sphere005_14" position={[-429.22, -55.54, -195.78]} rotation={[0, 1.12, 0]}>
                      <mesh
                        name="Object_33"
                        geometry={nodes.Object_33.geometry}
                        material={nodes.Object_33.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group name="Sphere006_15" position={[-515.64, 5.96, -128.2]} rotation={[0, 1.12, 0]}>
                      <mesh
                        name="Object_35"
                        geometry={nodes.Object_35.geometry}
                        material={nodes.Object_35.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group name="Sphere007_16" position={[-202.77, -60.41, -205.78]} rotation={[0, 1.12, 0]}>
                      <mesh
                        name="Object_37"
                        geometry={nodes.Object_37.geometry}
                        material={nodes.Object_37.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group
                      name="Sphere008_17"
                      position={[-509.67, -6.01, 282.99]}
                      rotation={[-Math.PI, -0.48, -Math.PI]}
                    >
                      <mesh
                        name="Object_39"
                        geometry={nodes.Object_39.geometry}
                        material={nodes.Object_39.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group
                      name="Sphere009_18"
                      position={[-424.36, -57.06, 346.62]}
                      rotation={[-Math.PI, -0.48, -Math.PI]}
                    >
                      <mesh
                        name="Object_41"
                        geometry={nodes.Object_41.geometry}
                        material={nodes.Object_41.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group
                      name="Sphere010_19"
                      position={[-330.89, -3.7, 371.74]}
                      rotation={[-Math.PI, -0.48, -Math.PI]}
                    >
                      <mesh
                        name="Object_43"
                        geometry={nodes.Object_43.geometry}
                        material={nodes.Object_43.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group name="Sphere011_20" position={[-140.4, 1.94, 334.23]} rotation={[0, -1.54, 0]} scale={1}>
                      <mesh
                        name="Object_45"
                        geometry={nodes.Object_45.geometry}
                        material={nodes.Object_45.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group name="Sphere012_21" position={[-49.58, -63.2, 254.67]} rotation={[0, -1.54, 0]} scale={1}>
                      <mesh
                        name="Object_47"
                        geometry={nodes.Object_47.geometry}
                        material={nodes.Object_47.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group name="Sphere013_22" position={[-11.7, -3.22, 183.89]} rotation={[0, -1.54, 0]} scale={1}>
                      <mesh
                        name="Object_49"
                        geometry={nodes.Object_49.geometry}
                        material={nodes.Object_49.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group name="Sphere014_23" position={[-235.96, -66.42, 370.74]} rotation={[0, -1.54, 0]} scale={1}>
                      <mesh
                        name="Object_51"
                        geometry={nodes.Object_51.geometry}
                        material={nodes.Object_51.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group name="Sphere015_24" position={[10.39, -55.31, 92.39]} rotation={[0, -1.54, 0]} scale={1}>
                      <mesh
                        name="Object_53"
                        geometry={nodes.Object_53.geometry}
                        material={nodes.Object_53.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group
                      name="Sphere016_25"
                      position={[-572.12, -45.29, 184.51]}
                      rotation={[-Math.PI, -0.48, -Math.PI]}
                    >
                      <mesh
                        name="Object_55"
                        geometry={nodes.Object_55.geometry}
                        material={nodes.Object_55.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group name="Sphere017_26" position={[-593.45, 9.23, 62.8]} rotation={[-Math.PI, -0.48, -Math.PI]}>
                      <mesh
                        name="Object_57"
                        geometry={nodes.Object_57.geometry}
                        material={nodes.Object_57.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <group
                      name="Sphere018_27"
                      position={[-575.29, -46.32, -30.52]}
                      rotation={[-Math.PI, -0.48, -Math.PI]}
                    >
                      <mesh
                        name="Object_59"
                        geometry={nodes.Object_59.geometry}
                        material={nodes.Object_59.material}
                        castShadow
                        receiveShadow
                      />
                    </group>
                    <mesh
                      name="Object_25"
                      geometry={nodes.Object_25.geometry}
                      material={nodes.Object_25.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <mesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={nodes.Object_22.material}
                    castShadow
                    receiveShadow
                  />
                  <mesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={nodes.Object_23.material}
                    castShadow
                    receiveShadow
                  />
                </group>
                <group name="Cake_layer_1001_30" position={[-4.84, -48.58, -0.44]} scale={[4.37, 1.76, 4.37]}>
                  <mesh
                    name="Object_61"
                    geometry={nodes.Object_61.geometry}
                    material={nodes.Object_61.material}
                    castShadow
                    receiveShadow
                  />
                  <mesh
                    name="Object_62"
                    geometry={nodes.Object_62.geometry}
                    material={nodes.Object_62.material}
                    castShadow
                    receiveShadow
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[200, 300, 300]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={-100000}
          position={[446.99, 894.53, -3.61]}
          rotation={[-1.57, 0.46, 1.58]}
          scale={1}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
*/

