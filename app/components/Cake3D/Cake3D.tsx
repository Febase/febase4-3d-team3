import { forwardRef } from 'react';

import * as styles from './Cake3D.css';

export interface Cake3DProps {
  title: string;
}

export interface Cake3DRef {}

const Cake3D = forwardRef<Cake3DRef, Cake3DProps>(({ title }, ref) => {
  return (
    <div className={styles.box}>
      <span className={styles.title}>{title}</span>
      <hr className={styles.divider} />
      <img
        className={styles.placeholder}
        src={'/images/cake-placeholder.png'}
        alt={'cake'}
      />
    </div>
  );
});

Cake3D.displayName = 'Cake3D';

export default Cake3D;
