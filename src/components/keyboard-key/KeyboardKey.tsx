import { Wrapper, StyledIcon } from './KeyboardKey.styles';

export type KeyboardKeyProps = {
  label?: string;
  icon?: string;
  status: 'none' | 'wrong' | 'almost' | 'correct';
  onClick?: () => void;
};

const KeyboardKey: React.FC<KeyboardKeyProps> = ({
  label = '',
  icon,
  status = 'none',
  onClick,
}) => {
  return (
    <Wrapper role="button" tabIndex={0} status={status} onClick={onClick}>
      {label}
      {icon && <StyledIcon name={icon} size={24} />}
    </Wrapper>
  );
};

export default KeyboardKey;
