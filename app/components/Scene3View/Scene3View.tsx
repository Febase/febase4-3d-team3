import { useEffect, useRef, useState } from 'react';

import Cake3D from '~/components/Cake3D';

import Container from './Container';
import Header from './Header';
import NextButton from './NextButton';
import * as styles from './Scene3View.css';
import SelectBox from './SelectBox';
import SelectContent from './SelectContent';
import SelectItem from './SelectItem';
import TextField from './TextField';

import type { FC } from 'react';

// TODO: implement select
const Scene3View: FC = () => {
  const formBoxRef = useRef<HTMLDivElement | null>(null);

  const [selectWidth, setSelectWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof window.document === 'undefined') return;

    const formBoxEl = formBoxRef.current;
    if (formBoxEl === null) return;

    setSelectWidth(formBoxEl.offsetWidth);
  }, []);

  return (
    <Container>
      <Header />
      <Cake3D title={'LETTERING'} />
      <div className={styles.formBox} ref={formBoxRef}>
        <TextField label={'TO.'} name={'to'} />
        <TextField label={'From.'} name={'from'} />
        <NextButton />
        {/*}
        <SelectBox label={'Lettering.'}>
          {selectWidth !== null && (
            <SelectContent width={selectWidth}>
              <SelectItem
                value={'template-1'}
                text={`[TEMPLATE - 1] Happy Valentine's Day!`}
              />
              <SelectItem
                value={'template-2'}
                text={`[TEMPLATE - 2] Happy Valentine's Day!`}
              />
              <SelectItem
                value={'template-3'}
                text={`[TEMPLATE - 3] Happy Valentine's Day!`}
              />
            </SelectContent>
          )}
        </SelectBox>
          */}
      </div>
    </Container>
  );
};

export default Scene3View;
