import { useNavigate, useSearchParams } from '@remix-run/react';
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

  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState({
    color: searchParams.get('color') ?? 'type-default',
    to: '',
    from: '',
    lettering: '',
  });

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    setQuery({ ...query, [name]: value });
    setSearchParams({ ...query, [name]: value });
  };

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
      <Cake3D title={'LETTERING'} lettering={query.lettering} />
      <div className={styles.formBox} ref={formBoxRef}>
        <TextField
          label={'TO.'}
          name={'to'}
          onChange={(e) => {
            handleChange({ name: 'to', value: e.target.value });
          }}
        />
        <TextField
          label={'From.'}
          name={'from'}
          onChange={(e) => {
            handleChange({ name: 'from', value: e.target.value });
          }}
        />
        <SelectBox
          label={'Lettering.'}
          onChange={(value) => {
            handleChange({ name: 'lettering', value });
          }}
        >
          {selectWidth !== null && (
            <SelectContent width={selectWidth}>
              {Object.keys(LETTERINGS).map((key) => (
                <SelectItem key={key} value={key} text={LETTERINGS[key]} />
              ))}
            </SelectContent>
          )}
        </SelectBox>
        <NextButton searchParams={searchParams} />
      </div>
    </Container>
  );
};

export default Scene3View;

interface CakeLetterings {
  [key: string]: string;
}

export const LETTERINGS: CakeLetterings = {
  'template-1': `Happy Valentine's Day!`,
  'template-2': `Happy White Day!`,
  'template-3': `With Love,`,
};
