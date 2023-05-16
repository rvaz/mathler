import type { CSSObject } from '@emotion/styled';
import type { SpecificButtonProps } from './Button';

import styled from '@emotion/styled';
import { forwardProps } from '@utils/forwardProps';
import * as colors from '@theme/colors';
import * as typo from '@theme/typography';
import Icon from '@mathler/components/icon';

const noForwardProps = ['iconAlignRight'];

const adjustButtonPadding = (hasLabel?: boolean, iconAlignRight?: boolean): CSSObject => {
  if (hasLabel) {
    if (iconAlignRight) {
      return { marginRight: '-0.2rem' };
    }
    return { marginLeft: '-0.2rem' };
  }
  return {};
};

export const StyledButton = styled(
  'button',
  forwardProps(noForwardProps),
)<SpecificButtonProps>(({ isDisabled, iconAlignRight }) => ({
  ...typo.P_B,
  alignItems: 'center',
  backgroundColor: colors.cloud,
  border: `0.1rem solid ${colors.thunderA30}`,
  borderRadius: '0.8rem',
  color: colors.thunderA40,
  cursor: isDisabled ? 'default' : 'pointer',
  display: 'inline-flex',
  flexDirection: iconAlignRight ? 'row-reverse' : 'row',
  isolation: 'isolate',
  justifyContent: 'center',
  minHeight: '3rem',
  minWidth: '3rem',
  padding: '0.6rem',
  position: 'relative',
  textTransform: 'none',
  transition: '200ms ease-in-out',

  ...(!isDisabled && {
    '&:focus, &:hover': {
      border: `0.1rem solid ${colors.thunderA60}`,
      color: colors.thunder,

      [`${StyledIcon}`]: {
        svg: {
          fill: colors.thunder,
        },
      },
    },
  }),
}));

export const StyledIcon = styled(Icon)<{
  hasLabel?: boolean;
  iconAlignRight?: boolean;
}>(({ hasLabel, iconAlignRight }) => ({
  ...adjustButtonPadding(hasLabel, iconAlignRight),
  display: 'inline-flex',

  svg: {
    fill: colors.thunderA40,
    transition: '200ms ease-in-out',
  },
}));
