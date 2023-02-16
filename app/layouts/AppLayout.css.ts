import { style } from '@vanilla-extract/css';

export const html = style({
  width: '100%',
  height: '100%',
});

export const body = style([
  html,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e0203',
    overflow: 'hidden',
  }
]);
