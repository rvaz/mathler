import { Wrapper, Back } from './Card.styles';

export type CardStatus = 'none' | 'wrong' | 'almost' | 'correct';
export type CardProps = {
  label?: string;
  position?: number;
  isActive?: boolean;
  isFocused?: boolean;
  animateReveal?: boolean;
  status: CardStatus;
};

const ariaMapper = {
  wrong: 'wrong',
  almost: 'out of place',
  correct: 'correct',
};

const Card: React.FC<CardProps> = ({
  label = '',
  position = 0,
  isActive,
  isFocused,
  animateReveal,
  status = 'none',
}) => {
  const ariaProps = {
    ...(status !== 'none' && { 'aria-label': `number "${label}" is ${ariaMapper[status]}` }),
    'aria-roledescription': 'number',
    role: 'text',
  };

  return (
    <Wrapper
      position={position}
      isActive={isActive}
      isFocused={isActive && isFocused}
      animateReveal={animateReveal}
      status={animateReveal ? 'none' : status}
      {...ariaProps}
    >
      {label}
      {animateReveal && <Back status={status}>{label}</Back>}
    </Wrapper>
  );
};

export default Card;
