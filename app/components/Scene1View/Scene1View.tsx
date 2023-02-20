import Container from './Container';
import * as styles from './Scene1View.css';
import StartButton from './StartButton';

import type { FC } from 'react';

const Scene1View: FC = () => {
  return (
    <Container>
      <img
        className={styles.img}
        width={227}
        src={'/images/heart.png'}
        alt={'heart'}
      />
      <span className={styles.title}>{'HAPPY\nVALENTINES DAY!'}</span>
      <span className={styles.body}>
        {'소중한 사람을 위해\n발렌타인 데이 레터링 케이크를\n만들어 보세요!'}
      </span>
      <StartButton />
    </Container>
  );
};

export default Scene1View;
