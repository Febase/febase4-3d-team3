import { useNavigate } from '@remix-run/react';

import * as styles from './NextButton.css';

const NextButton = ({ searchParams }: { searchParams: URLSearchParams }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/scene3?${searchParams.toString()}`);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Next
    </button>
  );
};

export default NextButton;
