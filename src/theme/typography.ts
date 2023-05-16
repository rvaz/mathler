import type { CSSProperties } from 'react';
import { weight } from '@theme/fonts';

const baseStyles = (fontSize: string, fontWeight: number, lineHeight: string) => ({
  fontSize,
  fontWeight,
  lineHeight,
});

/* Title */
export const H1: CSSProperties = {
  ...baseStyles('2rem', weight.black, '2rem'),
  letterSpacing: '-0.02em',
  textTransform: 'uppercase',
};

export const H2: CSSProperties = {
  ...baseStyles('1.6rem', weight.black, '2rem'),
  letterSpacing: '-0.02em',
};

/* Paragraph */
export const P_R: CSSProperties = {
  ...baseStyles('1.3rem', weight.regular, '2rem'),
  letterSpacing: '-0.01em',
};

export const P_M: CSSProperties = {
  ...baseStyles('1.3rem', weight.medium, '2rem'),
  letterSpacing: '-0.01em',
};

export const P_B: CSSProperties = {
  ...baseStyles('1.3rem', weight.black, '2rem'),
  letterSpacing: '-0.01em',
};

/* Calculation */
export const KBD_S1: CSSProperties = {
  ...baseStyles('2.4rem', weight.black, '3rem'),
};

export const KBD_S2: CSSProperties = {
  ...baseStyles('2rem', weight.black, '3rem'),
};
