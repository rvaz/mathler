import styled from '@emotion/styled';
import * as colors from '@theme/colors';
import * as typo from '@theme/typography';
import * as layers from '@theme/layers';
import Button from '@mathler/components/button';

export const Backdrop = styled('div')(() => ({
  backgroundColor: colors.thunderA30,
  backdropFilter: 'blur(0.4rem)',
  height: '100dvh',
  inset: 0,
  position: 'fixed',
  width: '100vw',
  zIndex: layers.modal,
}));

export const Wrapper = styled('div')(() => ({
  ...typo.P_R,
  backgroundColor: colors.cloud,
  borderRadius: '0.8rem',
  boxShadow: colors.shadow1,
  color: colors.black,
  display: 'grid',
  gridTemplateAreas: '"title button" "content content"',
  gridTemplateColumns: '1fr 3rem',
  gridTemplateRows: '3rem 1fr',
  inset: '45% 50%',
  maxWidth: '36rem',
  padding: '2rem',
  position: 'relative',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  zIndex: layers.modal,
}));

export const H2 = styled('h2')(() => ({
  ...typo.H2,
  color: colors.thunder,
  gridArea: 'title',
}));

export const StyledButton = styled(Button)(() => ({
  gridArea: 'button',
  transform: 'translate(0.5rem, -0.5rem)',
}));

export const ContentWrapper = styled('div')(() => ({
  gridArea: 'content',
}));
