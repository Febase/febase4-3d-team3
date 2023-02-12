import { style } from '@vanilla-extract/css';

export const box = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 32,
});

export const title = style({
  fontSize: 36,
  fontWeight: 400,
  lineHeight: 1.25,
  color: '#fff',
  fontFamily: `'Emilys Candy', cursive`,
});

export const divider = style({
  width: '33%',
  height: 1,
  backgroundColor: '#fff',
  margin: 0,
});

export const placeholder = style({
  width: '75%',
});
