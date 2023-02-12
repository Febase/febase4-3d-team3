import * as Select from '@radix-ui/react-select';

import { ClientOnly } from '~/components/common';

import * as styles from './SelectBox.css';

import type { FC, ReactNode } from 'react';

interface SelectBoxProps {
  label: string;
  children: ReactNode;
  defaultValue?: string;
  onChange?: (v: string) => void;
}

const SelectBox: FC<SelectBoxProps> = ({
  label,
  children,
  defaultValue,
  onChange,
}) => {
  return (
    <div className={styles.base}>
      <span className={styles.label}>{label}</span>
      <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
        <Select.Trigger className={styles.trigger}>
          <Select.Value placeholder={'Select lettering'} />
        </Select.Trigger>
        <ClientOnly>{children}</ClientOnly>
      </Select.Root>
    </div>
  );
};

export default SelectBox;
