import Option from './Option';
import options from './options';
import * as styles from './Selector.css';

import type { FC, ReactNode } from 'react';
interface SelectorProps {
  children: ReactNode | null;
}

const Selector: FC<SelectorProps> = ({ children }) => (
  <div className={styles.selector}>{children}</div>
);
export default Selector;
