import { style } from '@vanilla-extract/css';

export const img = style({
  maxWidth: '50%',
  marginBottom: 36,
});

export const title = style({
  fontSize: 36,
  fontWeight: 400,
  lineHeight: 1.25,
  color: '#fff',
  fontFamily: `'Emilys Candy', cursive`,
  whiteSpace: 'pre',
  textAlign: 'center',
  marginBottom: 'auto',
});

export const body = style({
  fontSize: 24,
  lineHeight: 1.25,
  color: '#fff',
  fontFamily: `Cafe24ClassicType-Regular`,
  whiteSpace: 'pre',
  textAlign: 'center',
  marginBottom: 72,
});
