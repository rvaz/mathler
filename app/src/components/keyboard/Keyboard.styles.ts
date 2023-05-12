import styled from '@emotion/styled';

export const Wrapper = styled('div')(() => ({
  padding: '2rem',
}));

export const GridKeys = styled('div')(() => ({
  display: 'grid',
  gridGap: '0.4rem',
  gridTemplateColumns: 'repeat(6, min-content)',
  justifyContent: 'center',
}));
