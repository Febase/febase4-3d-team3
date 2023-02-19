import { style } from '@vanilla-extract/css';

export const title = style({
  fontSize: 32,
  lineHeight: 1.5,
  fontWeight: 400,
  color: '#fff',
  fontFamily: `'Emilys Candy', cursive`,
  textAlign: 'center',
  marginBottom: 24,
});

export const divider = style({
  width: 144,
  marginBottom: 96,
  color: '#fff',
});

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});
