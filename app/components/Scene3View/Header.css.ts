import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const button = style({
  border: 'none',
  outline: 'none',
  background: 'transparent',
  color: '#fff',
  display: 'inline-flex',
  padding: 0,
});
