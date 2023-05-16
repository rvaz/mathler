import isPropValid from '@emotion/is-prop-valid';

/**
 * forwardProps
 * Validate which props to forward and which to exclude
 */
export const forwardProps = (noForwardProps: string[] = []) => ({
  shouldForwardProp: (prop: string) => isPropValid(prop) && !noForwardProps.includes(prop),
});
