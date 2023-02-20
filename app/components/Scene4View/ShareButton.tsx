import * as styles from './ShareButton.css';

import type { FC } from 'react';

const StartButton: FC = () => {
  const handleClick = () => {
    console.log('Share by link');
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Share by link
    </button>
  );
};

export default StartButton;
