import { useNavigate } from '@remix-run/react';

import * as styles from './StartButton.css';

import type { FC } from 'react';

const StartButton: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/scene2');
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Start
    </button>
  );
};

export default StartButton;
