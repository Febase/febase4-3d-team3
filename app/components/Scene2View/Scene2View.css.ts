import { style } from '@vanilla-extract/css';

export const selector = style({
  height: '320px',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  justifyContent: 'space-around',
});

export const option = style({
  width: 140,
  height: 100,
  border: '1px solid #fff',
  borderRadius: 20,
});
