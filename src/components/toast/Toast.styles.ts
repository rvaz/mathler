import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import * as colors from '@theme/colors';
import * as typo from '@theme/typography';
import * as layers from '@theme/layers';

export const Wrapper = styled('div')(() => ({
  ...typo.P_M,
  animation: `250ms cubic-bezier(0.25, 2.5, 0.5, 1)`,
  animationName: `${fadeOut}`,
  backgroundColor: colors.accentPurple,
  borderRadius: '0.8rem',
  boxShadow: colors.shadow0,
  color: colors.white,
  cursor: 'pointer',
  left: '50vw',
  maxWidth: 'calc(100vw - 4rem)',
  minWidth: '20rem',
  padding: '0.5rem 1rem',
  position: 'fixed',
  textAlign: 'center',
  top: '6rem',
  transform: 'translateX(-50%)',
  transformOrigin: 'center',
  zIndex: layers.toast,
}));

const fadeOut = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translateX(-50%) scale(0.8)',
  },
  '100%': {
    opacity: '1',
    transform: 'translateX(-50%) scale(1)',
  },
});
