import { useNavigate } from '@remix-run/react';

import * as styles from './NextButton.css';

import type { FC } from 'react';

const NextButton: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/scene3');
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Next
    </button>
  );
};

export default NextButton;
