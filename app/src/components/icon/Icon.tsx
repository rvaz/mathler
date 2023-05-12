import type { SvgProps } from '@mathler/types/icon';

import * as ICONS from '@mathler/assets/icons';
import { parseIconName } from '@utils/icons';
import { Wrapper } from './Icon.styles';

export type ConditionalIconProps =
  | {
      name: string | keyof typeof ICONS;
      url?: never;
    }
  | {
      name?: never;
      url: string;
    };

export type IconProps = {
  size?: number;
  color?: string;
  variant?: string;
} & ConditionalIconProps;

const Icon: React.FC<IconProps> = ({ name, size = 24, color, variant, url, ...rest }) => {
  const Elem = ICONS[parseIconName(name) as keyof typeof ICONS];
  if ((!name || !Elem) && !url) return null;

  return (
    <Wrapper data-testid="wrapper" size={size} {...rest}>
      <Elem data-testid="icon" fill={color} variant={variant} />
    </Wrapper>
  );
};

export default Icon;
