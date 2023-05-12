import styled from '@emotion/styled';
import * as colors from '@theme/colors';
import * as typo from '@theme/typography';

export const Wrapper = styled('div')(() => ({
  padding: '3rem 2rem',
}));

export const P = styled('p')(() => ({
  ...typo.P_R,
  color: colors.thunder,
  marginBottom: '2rem',
  textAlign: 'center',
}));

export const GridCards = styled('div')(() => ({
  display: 'grid',
  gridAutoFlow: 'column dense',
  gridGap: '0.2rem',
  justifyContent: 'center',
}));
