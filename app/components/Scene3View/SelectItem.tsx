import * as Select from '@radix-ui/react-select';

import * as styles from './SelectItem.css';

import type { FC } from 'react';

interface SelectItemProps {
  value: string;
  text: string;
}

const SelectItem: FC<SelectItemProps> = ({ value, text }) => {
  return (
    <Select.Item className={styles.item} value={value}>
      <Select.ItemText>{text}</Select.ItemText>
    </Select.Item>
  );
};

export default SelectItem;
