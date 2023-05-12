import styled from '@emotion/styled';
import * as colors from '@theme/colors';
import * as typo from '@theme/typography';
import * as layers from '@theme/layers';

export const Wrapper = styled('div')(() => ({
  ...typo.P_M,
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
  zIndex: layers.toast,
}));
