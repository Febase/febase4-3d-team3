import * as styles from './Container.css';

import type { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
  <div className={styles.box}>{children}</div>
);

export default Container;
