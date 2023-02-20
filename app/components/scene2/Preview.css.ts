import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
export const previewBox = style({
  width: '100%',
  height: calc.subtract('100%', '320px'),
  display: 'flex',
});

globalStyle(`${previewBox} canvas`, {
  width: '100%',
  height: '100%',
});
