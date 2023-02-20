import * as styles from './SceneContainer.css';

import type { FC, ReactNode } from 'react';

interface SceneContainerProps {
  children: ReactNode;
}

const SceneContainer: FC<SceneContainerProps> = ({ children }) => (
  <div className={styles.box}>{children}</div>
);

export default SceneContainer;
