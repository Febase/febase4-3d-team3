import { style } from '@vanilla-extract/css';

export const item = style({
  width: '100%',
  outline: 'none',
  fontSize: 16,
  lineHeight: 1.25,
  color: '#fff',
  fontFamily: `Cafe24ClassicType-Regular`,
  padding: '10px 14px',
  selectors: {
    '& + &': {
      borderTop: '2px solid #ed1c32',
    },
  },
});
