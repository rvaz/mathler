import Card from '@mathler/components/card';
import { Wrapper, P, GridCards } from './Challenge.styles';

type ChallengeProps = {
  hint?: string;
  config?: any;
};

const Challenge: React.FC<ChallengeProps> = ({ hint = '00', config }) => {
  return (
    <Wrapper>
      <P>Find the hidden calculation that equals {hint}</P>
      <GridCards>
        <Card status="none" />
        <Card status="none" isActive isFocused />
        <Card status="none" isActive label="7" />
        <Card status="wrong" label="1" />
        <Card status="almost" label="*" />
        <Card status="correct" label="4" />
      </GridCards>
    </Wrapper>
  );
};

export default Challenge;
