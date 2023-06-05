import type { Guess, GuessEntry } from '@mathler/types/game';

import { useEffect, useLayoutEffect, useState } from 'react';
import { getSolution, getGuesses, saveGuess } from '@utils/store';
import { validateGuess, checkAnswer } from '@utils/game';
import {
  ModalAbout,
  ModalLanguage,
  ModalSettings,
  ModalStatistics,
} from '@mathler/partials/modals';
import Container from '@mathler/components/container';
import Navbar from '@mathler/components/navbar';
import Toast from '@mathler/components/toast';
import Challenge from '@mathler/components/challenge';
import Keyboard from '@mathler/components/keyboard';
import { Wrapper } from './Game.styles';

let solution = eval(getSolution());
const overMessage: { [key: string]: string } = {
  true: 'Congratulations.',
  false: 'Game over.',
};

const modalMapper = {
  about: ModalAbout,
  language: ModalLanguage,
  settings: ModalSettings,
  statistics: ModalStatistics,
};

const Game = () => {
  const pastGuesses = getGuesses().length;
  const isWin =
    pastGuesses &&
    getGuesses()[pastGuesses - 1].every(
      ({ status }: { status: GuessEntry['status'] }) => status === 'correct',
    );
  const isOver = pastGuesses ? isWin || pastGuesses === 6 : false;
  const emptyGuess: Guess = [
    { id: `${pastGuesses}0`, label: '', status: 'none' },
    { id: `${pastGuesses}1`, label: '', status: 'none' },
    { id: `${pastGuesses}2`, label: '', status: 'none' },
    { id: `${pastGuesses}3`, label: '', status: 'none' },
    { id: `${pastGuesses}4`, label: '', status: 'none' },
    { id: `${pastGuesses}5`, label: '', status: 'none' },
  ];

  const [activeModal, setActiveModal] = useState('about');
  const [toastMessage, setToastMessage] = useState(isOver ? overMessage[isWin] : '');
  const [animateShakeRow, setAnimateShakeRow] = useState(false);
  const [animateReveal, setAnimateReveal] = useState(false);
  const [currentGuess, setCurrentGuess] = useState<Guess>(emptyGuess);

  useLayoutEffect(() => {
    if (!solution) {
      solution = eval(getSolution());
    }
  }, [solution]);

  useEffect(() => {
    if (isOver) setToastMessage(overMessage[isWin]);
  }, [isOver]);

  const handleOnKeyPress = (keyValue: string) => {
    setToastMessage('');
    const keyPos = currentGuess.map(({ label }) => label).join('').length;
    if (keyPos === 6) return;

    const newGuess = [...currentGuess];
    newGuess[keyPos].label = keyValue;
    setCurrentGuess(newGuess);
  };

  const handleOnEnter = () => {
    if (isOver) {
      setToastMessage(overMessage[isWin]);
      return;
    }

    const guess = currentGuess.map(({ label }) => label).join('');
    const guessFeedback = validateGuess(guess, solution);

    if (typeof guessFeedback === 'string') {
      setToastMessage(guessFeedback);
      setAnimateShakeRow(true);
      return;
    }

    if (guessFeedback) {
      const checkedGuess = checkAnswer(currentGuess, getSolution());
      setCurrentGuess(checkedGuess);
      setAnimateReveal(true);
    }
  };

  const handleOnDelete = () => {
    if (isOver) {
      setToastMessage(overMessage[isWin]);
      return;
    }

    setToastMessage('');
    const keyPos = currentGuess.map(({ label }) => label).join('').length;
    if (keyPos === 0) return;

    const newGuess = [...currentGuess];
    newGuess[keyPos - 1].label = '';
    setCurrentGuess(newGuess);
  };

  const handleOnAnimationEnd = () => {
    if (animateReveal) {
      saveGuess(currentGuess);
      setCurrentGuess(emptyGuess);
    }
    setAnimateReveal(false);
    setAnimateShakeRow(false); // reset this animation
  };

  const renderModal = () => {
    if (!activeModal) return <></>;
    const Elem = modalMapper[activeModal as keyof typeof modalMapper];
    return <Elem onModalClose={() => setActiveModal('')} />;
  };

  return (
    <Container>
      {!!toastMessage && <Toast label={toastMessage} onClick={() => setToastMessage('')} />}
      <Wrapper>
        <Navbar title="Take-Home" onClick={setActiveModal} />
        <Challenge
          hint={solution}
          currentGuess={isOver ? undefined : currentGuess}
          animateReveal={animateReveal}
          animateShakeRow={animateShakeRow}
          onAnimationEnd={handleOnAnimationEnd}
        />
        <Keyboard onEnter={handleOnEnter} onDelete={handleOnDelete} onKeyPress={handleOnKeyPress} />
      </Wrapper>
      {renderModal()}
    </Container>
  );
};

export default Game;
