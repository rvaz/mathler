import styled from '@emotion/styled';
import * as colors from '@theme/colors';
import * as typo from '@theme/typography';

export const Wrapper = styled('div')(() => ({
  alignItems: 'center',
  backdropFilter: 'blur(0.4rem)',
  backgroundColor: colors.cloudA40,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem',
  position: 'sticky',
  top: 0,
  width: '100%',
}));

export const H1 = styled('h1')(() => ({
  ...typo.H1,
  color: colors.thunderA40,
  margin: 0,
  textAlign: 'center',
}));

export const LeftActions = styled('div')(() => ({
  display: 'inline-flex',

  '> *': {
    marginRight: '0.4rem',
  },
}));

export const RightActions = styled('div')(() => ({
  display: 'inline-flex',

  '> *': {
    marginLeft: '0.4rem',
  },
}));
