import Card from '@mathler/components/card';
import { Wrapper, P, GridCards } from './Challenge.styles';

type ChallengeProps = {
  hint?: string;
  animateReveal?: boolean;
  animateShakeRow?: boolean;
  onAnimationEnd?: () => void;
};

const prevRow = [
  { id: '100', label: '7', status: 'wrong', isActive: false, isFocused: false },
  { id: '101', label: '*', status: 'almost', isActive: false, isFocused: false },
  { id: '102', label: '4', status: 'almost', isActive: false, isFocused: false },
  { id: '103', label: '-', status: 'correct', isActive: false, isFocused: false },
  { id: '104', label: '1', status: 'correct', isActive: false, isFocused: false },
  { id: '105', label: '4', status: 'wrong', isActive: false, isFocused: false },
];

const currRow = [
  { id: '200', label: '8', status: 'wrong', isActive: true, isFocused: false },
  { id: '201', label: '/', status: 'almost', isActive: true, isFocused: false },
  { id: '202', label: '2', status: 'almost', isActive: true, isFocused: false },
  { id: '203', label: '-', status: 'correct', isActive: true, isFocused: false },
  { id: '204', label: '1', status: 'correct', isActive: true, isFocused: false },
  { id: '205', label: '5', status: 'wrong', isActive: true, isFocused: true },
];

const Challenge: React.FC<ChallengeProps> = ({
  hint = '14',
  animateReveal,
  animateShakeRow,
  onAnimationEnd,
}) => {
  return (
    <Wrapper>
      <P>Find the hidden calculation that equals {hint}</P>
      <GridCards>
        {prevRow.map(({ id, label, status, isActive, isFocused }) => (
          <Card key={id} label={label} status={status} isActive={isActive} isFocused={isFocused} />
        ))}
      </GridCards>
      <GridCards
        animateShakeRow={animateShakeRow}
        animateReveal={animateReveal}
        onAnimationEnd={onAnimationEnd}
      >
        {currRow.map(({ id, label, status, isActive, isFocused }) => (
          <Card
            key={id}
            label={label}
            status={animateReveal ? status : 'none'}
            isActive={animateReveal ? false : isActive}
            isFocused={isFocused}
          />
        ))}
      </GridCards>
      <GridCards>
        {Array(24)
          .fill(24, 0, 24)
          .map((_, idx) => (
            <Card status="none" key={idx} />
          ))}
      </GridCards>
    </Wrapper>
  );
};

export default Challenge;
