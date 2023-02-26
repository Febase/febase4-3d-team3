import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useNavigate } from '@remix-run/react';

import * as styles from './Header.css';

import type { FC } from 'react';

const Header: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/scene2`);
  };

  return (
    <div className={styles.base}>
      <button className={styles.button} onClick={handleClick}>
        <ArrowLeftIcon width={32} height={32} />
      </button>
    </div>
  );
};

export default Header;
