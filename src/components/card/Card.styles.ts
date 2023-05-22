import type { CSSObject } from '@emotion/styled';
import type { CardProps } from './Card';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import * as colors from '@theme/colors';
import * as typo from '@theme/typography';

const statusStyles = ({ isActive, isFocused, status }: CardProps): CSSObject => ({
  ...(status === 'none' && {
    backgroundColor: isActive ? colors.cloud : colors.thunderA20,
    borderColor: isActive ? colors.thunder : 'transparent',
    ...(isFocused && { borderBottomWidth: '0.4rem' }),
  }),
  ...(status === 'wrong' && {
    backgroundColor: colors.thunder,
  }),
  ...(status === 'almost' && {
    backgroundColor: colors.accentYellow,
  }),
  ...(status === 'correct' && {
    backgroundColor: colors.accentGreen,
  }),
});

const commonStyles = ({ isActive }: Partial<CardProps>): CSSObject => ({
  ...typo.KBD_S2,
  alignItems: 'center',
  backfaceVisibility: 'hidden',
  borderRadius: '0.4rem',
  color: isActive ? colors.thunder : colors.white,
  display: 'flex',
  justifyContent: 'center',
});

export const Wrapper = styled('div')<CardProps>(
  ({ isActive, isFocused, animateReveal, position = 0, status }) => ({
    ...commonStyles({ isActive }),
    ...(animateReveal && {
      animation: '600ms cubic-bezier(0.25, 2.5, 0.5, 0.5)',
      animationName: `${reveal}`,
    }),
    animationDelay: `${position * 100}ms`,
    animationFillMode: 'both',
    border: '0.2rem solid transparent',
    height: '4rem',
    minHeight: '4rem',
    minWidth: '4rem',
    perspective: '40rem',
    position: 'relative',
    transformOrigin: 'center',
    transformStyle: 'preserve-3d',
    transition: 'border 200ms ease-in-out',
    width: '4rem',
    ...statusStyles({ isActive, isFocused, status }),
  }),
);

export const Front = styled('div')<CardProps>(({ status }) => ({}));

export const Back = styled('div')<CardProps>(({ isActive, status }) => ({
  ...commonStyles({ isActive }),
  height: 'calc(100% + 0.4rem)',
  inset: '-0.2rem',
  position: 'absolute',
  transform: 'rotateY(180deg)',
  width: 'calc(100% + 0.4rem)',
  ...statusStyles({ status }),
}));

const reveal = keyframes({
  '0%': {
    transform: 'rotateY(0deg)',
  },
  '100%': {
    transform: 'rotateY(180deg)',
  },
});
