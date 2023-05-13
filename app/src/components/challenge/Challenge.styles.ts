import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import * as colors from '@theme/colors';
import * as typo from '@theme/typography';

export const Wrapper = styled('div')(() => ({
  alignContent: 'center',
  display: 'grid',
  padding: '3rem 2rem',
}));

export const P = styled('p')(() => ({
  ...typo.P_R,
  color: colors.thunder,
  marginBottom: '2rem',
  textAlign: 'center',
}));

export const GridCards = styled('div')<{ animateShakeRow?: boolean; animateReveal?: boolean }>(
  ({ animateShakeRow, animateReveal }) => ({
    ...(animateShakeRow &&
      !animateReveal && {
        animation: `500ms cubic-bezier(0.25, 2.5, 0.5, 1)`,
        animationName: `${shakeRow}`,
      }),
    animationPlayState: animateShakeRow ? 'running' : 'paused',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, min-content)',
    gridGap: '0.2rem',
    justifyContent: 'center',
    marginBottom: '0.2rem',
    transition: 'transform 500ms',
    transform: `rotateX(${animateReveal ? '360' : '0'}deg)`,
    transformStyle: 'preserve-3d',
  }),
);

const shakeRow = keyframes({
  '0%': {
    transform: 'translateX(0%)',
  },
  '30%': {
    transform: 'translateX(2%)',
  },
  '50%': {
    transform: 'translateX(-2%)',
  },
  '70%': {
    transform: 'translateX(1%)',
  },
  '85%': {
    transform: 'translateX(-1%)',
  },
  '100%': {
    transform: 'translateX(0%)',
  },
});
