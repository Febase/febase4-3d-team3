import { useNavigate, useParams, useSearchParams } from '@remix-run/react';
import { useEffect, useMemo, useRef, useState } from 'react';

import Cake3D from '~/components/Cake3D';

import Container from './Container';
import NextButton from './NextButton';
import * as styles from './Scene2View.css';

import type { FC } from 'react';
import type { MeshStandardMaterial } from 'three';
import type { Cake3DRef } from '~/components/Cake3D';

const Scene2View: FC = () => {
  const ref = useRef<Cake3DRef>(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const colorType = searchParams.get('color') ?? 'type-default';
  const newColor = useMemo(
    () => COLORS.find(({ key }) => key === colorType)?.color ?? COLORS[0].color,
    [colorType]
  );

  const changeColor = (newColor: RGBColor, key: string) => {
    const materials = ref.current?.materials ?? null;
    if (materials === null) return;

    const cakeMaterial = materials['Cake'] as MeshStandardMaterial;
    cakeMaterial.color.setRGB(...newColor);

    navigate(`/scene2?color=${key}`);
  };

  useEffect(() => {
    changeColor(newColor, colorType);
  }, []);

  return (
    <Container>
      <Cake3D title={'Cake'} ref={ref} />
      <div className={styles.selector}>
        {COLORS.map(({ key, color }) => (
          <button
            className={styles.option}
            onClick={() => changeColor(color, key)}
            key={key}
            style={{ backgroundColor: getRgbString(color) }}
          />
        ))}
      </div>
      <NextButton searchParams={searchParams} />
    </Container>
  );
};

export default Scene2View;

type RGBColor = [r: number, g: number, b: number];

const getRgbString = (rgb: RGBColor) => {
  return `rgb(${rgb[0] * 255}, ${rgb[1] * 255}, ${rgb[2] * 255})`;
};

interface CakeColor {
  key: string;
  color: RGBColor;
}

const COLORS: CakeColor[] = [
  {
    key: 'type-default',
    color: [0.8, 0.263694, 0.319311],
  },
  {
    key: 'type-1',
    color: [0.263694, 0.319311, 0.8],
  },
  {
    key: 'type-2',
    color: [0.319311, 0.8, 0.263694],
  },
  {
    key: 'type-3',
    color: [0.319311, 0.263694, 0.8],
  },
];
