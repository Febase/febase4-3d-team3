import { Canvas } from '@react-three/fiber';
import { ChangeEvent, FC, Suspense } from 'react';
import CakeOption from './CakeOption';
import * as optionStyle from './Option.css';

interface OptionProps {
  typeId: string;
  onClick: () => void;
}

const Option: FC<OptionProps> = ({ typeId, onClick }) => (
  <div onClick={onClick} className={optionStyle.option}>
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-8, 6, 4],
      }}
    >
      <Suspense fallback={null}>
        <CakeOption typeId={typeId} />
      </Suspense>
    </Canvas>
  </div>
);
export default Option;
