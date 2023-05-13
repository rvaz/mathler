import { Wrapper } from './Card.styles';

export type CardProps = {
  label?: string;
  isActive?: boolean;
  isFocused?: boolean;
  status: 'none' | 'wrong' | 'almost' | 'correct';
};

const ariaMapper = {
  wrong: 'wrong',
  almost: 'out of place',
  correct: 'correct',
};

const Card: React.FC<CardProps> = ({ label = '', isActive, isFocused, status = 'none' }) => {
  const ariaProps = {
    ...(status !== 'none' && { 'aria-label': `number "${label}" is ${ariaMapper[status]}` }),
    'aria-roledescription': 'number',
    role: 'text',
  };

  return (
    <Wrapper isActive={isActive} isFocused={isActive && isFocused} status={status} {...ariaProps}>
      {label}
    </Wrapper>
  );
};

export default Card;
