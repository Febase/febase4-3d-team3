import StartButton from './StartButton';
import * as styles from './StartForm.css';
import StartTitle from './StartTitle';

import type { FC } from 'react';

const StartForm: FC = () => {
  return (
    <div className={styles.form}>
      <StartTitle />
      <StartButton />
    </div>
  );
};

export default StartForm;
