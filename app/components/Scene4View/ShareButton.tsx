import * as styles from './ShareButton.css';

import type { FC } from 'react';

const ShareButton: FC = () => {
  const location = window.location.href;
  const handleClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(location)
        .then(() => alert('링크가 클립보드에 복사되었습니다.'))
        .catch((err) => {
          console.error(err);
          return '링크 복사에 실패했습니다.';
        });
    }
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Share by link
    </button>
  );
};

export default ShareButton;
