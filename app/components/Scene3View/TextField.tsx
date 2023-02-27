import * as styles from './TextField.css';

import type { FC, HTMLProps } from 'react';

interface TextFieldProps extends HTMLProps<HTMLInputElement> {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = ({ label, ...props }) => {
  return (
    <label className={styles.base}>
      <span className={styles.label}>{label}</span>
      <input className={styles.input} {...props} />
    </label>
  );
};

export default TextField;
