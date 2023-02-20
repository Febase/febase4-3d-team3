import { globalStyle, style } from '@vanilla-extract/css';

export const previewBox = style({
  width: '100%',
  height: 'calc(100% - 320px)',
  display: 'flex',
});

globalStyle(`${previewBox} canvas`, {
  width: '100%',
  height: '100%',
});
