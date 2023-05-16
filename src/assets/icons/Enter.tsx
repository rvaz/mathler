import * as colors from '@theme/colors';

import type { SvgProps } from '@mathler/types/icon';

const Enter = ({ fill = colors.textPrimary, ...rest }: SvgProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...rest}>
      <path d="M19.0003 13.9999L19.0004 5.00003L17.0004 5L17.0003 11.9999L6.82845 12L10.7782 8.05027L9.36396 6.63606L3 13L9.36396 19.364L10.7782 17.9498L6.8284 14L19.0003 13.9999Z" />
    </svg>
  );
};

export default Enter;