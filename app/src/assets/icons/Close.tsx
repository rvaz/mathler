import * as colors from '@theme/colors';

import type { SvgProps } from '@mathler/types/icon';

const Close = ({ fill = colors.textPrimary, ...rest }: SvgProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...rest}>
      <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
    </svg>
  );
};

export default Close;
