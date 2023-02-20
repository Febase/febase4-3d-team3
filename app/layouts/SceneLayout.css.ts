import {
  createVar,
  fallbackVar,
  style,
  styleVariants,
} from '@vanilla-extract/css';

export const y = createVar();
export const offset = createVar();

export const base = style({
  maxWidth: 480,
  width: '100%',
  height: '100vh',
  background: 'radial-gradient(69.09% 69.09% at 50% 30.91%, rgba(210, 3, 24, 0.2) 0%, rgba(0, 0, 0, 0) 100%), rgba(31, 24, 24, 0.8);',
  boxShadow: '0px 0px 16px rgba(255, 255, 255, 0.16)',
  padding: 32,
  '@media': {
    '(min-width: 480px)': {
      height: `calc(100% - ${fallbackVar(offset, '64px')})`,
      transform: `translateY(${fallbackVar(y, '32px')})`,
      transition: 'height 300ms ease-in-out, transform 300ms ease-in-out',
    },
  },
});

export const radius = styleVariants({
  default: {},
  top: {
    '@media': {
      '(min-width: 480px)': {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      },
    },
  },
  bottom: {
    '@media': {
      '(min-width: 480px)': {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
      },
    },
  },
});

export const box = styleVariants({
  default: [base, radius.default],
  top: [base, radius.top],
  bottom: [base, radius.bottom],
});
