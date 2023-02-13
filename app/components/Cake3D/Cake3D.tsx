import { forwardRef } from 'react';

import { ClientOnly } from '~/components/common';

import * as styles from './Cake3D.css';
import ThreeCanvas from './ThreeCanvas';

export interface Cake3DProps {
  title: string;
}

export interface Cake3DRef {}

const Cake3D = forwardRef<Cake3DRef, Cake3DProps>(({ title }, ref) => {
  return (
    <div className={styles.box}>
      <span className={styles.title}>{title}</span>
      <hr className={styles.divider} />
      <div className={styles.canvasBox}>
        <ClientOnly>
          <ThreeCanvas />
        </ClientOnly>
      </div>
    </div>
  );
});

Cake3D.displayName = 'Cake3D';

export default Cake3D;
