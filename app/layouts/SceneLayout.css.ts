import { createVar, fallbackVar, style, styleVariants } from '@vanilla-extract/css';

export const y = createVar();
export const offset = createVar();

export const base = style({
  maxWidth: 480,
  width: '100%',
  height: `calc(100% - ${fallbackVar(offset, '64px')})`,
  backgroundColor: 'rgba(31, 24, 24, 0.8)',
  boxShadow: '0px 0px 16px rgba(255, 255, 255, 0.16)',
  transform: `translateY(${fallbackVar(y, '32px')})`,
  transition: 'height 300ms ease-in-out, transform 300ms ease-in-out',
  padding: 32,
});

export const radius = styleVariants({
  default: {},
  top: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  bottom: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export const box = styleVariants({
  default: [base, radius.default],
  top: [base, radius.top],
  bottom: [base, radius.bottom],
});
