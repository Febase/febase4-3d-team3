import { FC, ReactNode } from 'react';
import Option from './Option';
import options from './options';
import * as styles from './Selector.css';
interface SelectorProps {
  children: ReactNode | null;
}

const Selector: FC<SelectorProps> = ({ children }) => (
  <div className={styles.selector}>{children}</div>
);
export default Selector;
