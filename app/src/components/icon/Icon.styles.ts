import styled from '@emotion/styled';

export const Wrapper = styled('div')<{
  size: number;
  backgroundColor?: string;
  borderRadius?: string;
}>(({ size, backgroundColor, borderRadius }) => ({
  ...(backgroundColor && { backgroundColor }),
  ...(borderRadius && { borderRadius }),
  alignItems: 'center',
  display: 'inline-flex',
  height: `${size / 10}rem`,
  justifyContent: 'center',
  minWidth: `${size / 10}rem`,
  width: `${size / 10}rem`,

  svg: {
    height: '100%',
    width: '100%',
  },
}));
