import { createVar, fallbackVar, style } from '@vanilla-extract/css';

export const width = createVar();

export const content = style({
  width: fallbackVar(width, '100%'),
  border: '2px solid #ed1c32',
  background: '#1e0203',
});
