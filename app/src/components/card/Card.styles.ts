import type { CSSObject } from '@emotion/styled';
import type { CardProps } from './Card';

import styled from '@emotion/styled';
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

export const Wrapper = styled('div')<CardProps>(({ isActive, isFocused, status }) => ({
  ...typo.KBD_S2,
  alignItems: 'center',
  backfaceVisibility: 'hidden',
  border: '0.2rem solid transparent',
  borderRadius: '0.4rem',
  color: isActive ? colors.thunder : colors.white,
  display: 'flex',
  height: '4rem',
  justifyContent: 'center',
  minHeight: '4rem',
  minWidth: '4rem',
  transition: '200ms ease-in-out',
  width: '4rem',
  ...statusStyles({ isActive, isFocused, status }),
}));
