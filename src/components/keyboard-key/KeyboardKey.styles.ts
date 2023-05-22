import type { CSSObject } from '@emotion/styled';
import type { KeyboardKeyProps } from './KeyboardKey';

import styled from '@emotion/styled';
import * as colors from '@theme/colors';
import * as typo from '@theme/typography';
import Icon from '@mathler/components/icon';

const statusStyles = ({ status }: KeyboardKeyProps): CSSObject => ({
  ...(status === 'none' && {
    backgroundColor: colors.thunder,
  }),
  ...(status === 'wrong' && {
    backgroundColor: colors.thunderA30,
  }),
  ...(status === 'almost' && {
    backgroundColor: colors.accentYellow,
  }),
  ...(status === 'correct' && {
    backgroundColor: colors.accentGreen,
  }),
});

export const Wrapper = styled('div')<KeyboardKeyProps>(({ status }) => ({
  ...typo.KBD_S1,
  alignItems: 'center',
  border: '0.2rem solid transparent',
  borderRadius: '0.4rem',
  color: colors.white,
  cursor: 'pointer',
  display: 'flex',
  height: '5rem',
  justifyContent: 'center',
  minHeight: '5rem',
  minWidth: '5rem',
  transform: 'scale(1)',
  transformOrigin: 'center',
  transition: '100ms ease-in-out',
  userSelect: 'none',
  width: '5rem',
  ...statusStyles({ status }),

  '&:active, &:hover': {
    transform: 'scale(1.1)',
  },
}));

export const StyledIcon = styled(Icon)(() => ({
  svg: {
    fill: colors.white,
  },
}));
