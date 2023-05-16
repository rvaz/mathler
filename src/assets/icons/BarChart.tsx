import * as colors from '@theme/colors';

import type { SvgProps } from '@mathler/types/icon';

const BarChart = ({ fill = colors.textPrimary, ...rest }: SvgProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...rest}>
      <path d="M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z" />
    </svg>
  );
};

export default BarChart;
