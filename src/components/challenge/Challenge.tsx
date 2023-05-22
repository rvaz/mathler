import type { Guess, GuessEntry } from '@mathler/types/game';

import { getGuesses } from '@utils/store';
import Card from '@mathler/components/card';
import { Wrapper, P, GridCards } from './Challenge.styles';

type ChallengeProps = {
  hint?: string;
  currentGuess?: Guess;
  animateReveal?: boolean;
  animateShakeRow?: boolean;
  onAnimationEnd?: () => void;
};

const allowedGuesses = 6;

const Challenge: React.FC<ChallengeProps> = ({
  hint = '0',
  currentGuess,
  animateReveal,
  animateShakeRow,
  onAnimationEnd,
}) => {
  const pastGuesses = getGuesses().length;
  const missingGuesses = allowedGuesses - pastGuesses - +!!currentGuess;
  const focusedIdx = currentGuess?.map(({ label }) => label).join('').length || 0;

  return (
    <Wrapper>
      <P>
        Find the hidden calculation that equals <b>{hint}</b>
      </P>
      {!!pastGuesses && (
        <GridCards>
          {getGuesses().map((fullGuess: Guess) =>
            fullGuess.map(({ id, label, status }: GuessEntry) => (
              <Card key={id} label={label} status={status} />
            )),
          )}
        </GridCards>
      )}
      {currentGuess && (
        <GridCards
          animateShakeRow={animateShakeRow}
          animateReveal={animateReveal}
          onAnimationEnd={onAnimationEnd}
        >
          {currentGuess.map(({ id, label, status }, idx) => (
            <Card
              key={id}
              label={label}
              position={idx}
              status={animateReveal ? status : 'none'}
              animateReveal={animateReveal}
              isFocused={animateReveal ? false : focusedIdx === idx}
              isActive
            />
          ))}
        </GridCards>
      )}
      {!!missingGuesses && (
        <GridCards>
          {Array(missingGuesses * 6)
            .fill(missingGuesses * 6, 0, missingGuesses * 6)
            .map((_, idx) => (
              <Card status="none" key={idx} />
            ))}
        </GridCards>
      )}
    </Wrapper>
  );
};

export default Challenge;
