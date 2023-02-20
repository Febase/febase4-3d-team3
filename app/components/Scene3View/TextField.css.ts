import { style } from '@vanilla-extract/css';

export const base = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 12,
});

export const label = style({
  fontSize: 20,
  lineHeight: 1.25,
  color: '#ed1c32',
  fontFamily: `Cafe24ClassicType-Regular`,
});

export const input = style({
  border: '2px solid #ed1c32',
  outline: 'none',
  fontSize: 16,
  lineHeight: 1.25,
  color: '#fff',
  fontFamily: `Cafe24ClassicType-Regular`,
  padding: '10px 14px',
  background: '#1e0203',
});
