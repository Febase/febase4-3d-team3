import * as Select from '@radix-ui/react-select';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './SelectContent.css';

import type { FC, ReactNode } from 'react';

interface SelectContentProps {
  children: ReactNode;
  width: number;
}

const SelectContent: FC<SelectContentProps> = ({ children, width }) => {
  return (
    <Select.Portal>
      <Select.Content
        className={styles.content}
        position={'popper'}
        style={assignInlineVars({
          [styles.width]: `${width}px`,
        })}
      >
        {children}
      </Select.Content>
    </Select.Portal>
  );
};

export default SelectContent;
