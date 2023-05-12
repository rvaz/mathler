import { Wrapper } from './Card.styles';

export type CardProps = {
  label?: string;
  isActive?: boolean;
  isFocused?: boolean;
  status: 'none' | 'wrong' | 'almost' | 'correct';
};

const Card: React.FC<CardProps> = ({ label = '', isActive, isFocused, status = 'none' }) => {
  return (
    <Wrapper isActive={isActive} isFocused={isActive && isFocused} status={status}>
      {label}
    </Wrapper>
  );
};

export default Card;
