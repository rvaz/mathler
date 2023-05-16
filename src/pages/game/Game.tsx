import { useCallback, useState } from 'react';
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

const modalMapper = {
  about: ModalAbout,
  language: ModalLanguage,
  settings: ModalSettings,
  statistics: ModalStatistics,
};

const Game = () => {
  const [activeModal, setActiveModal] = useState('about');
  const [validateAnswer, setValidateAnswer] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const [animateShakeRow, setAnimateShakeRow] = useState(false);

  const handleOnEnter = () => {
    setValidateAnswer(true);
  };

  const handleOnDelete = () => {
    setShowToast(true);
    setAnimateShakeRow(true);
  };

  const handleOnAnimationEnd = () => {
    setAnimateShakeRow(false);
  };

  const renderModal = () => {
    if (!activeModal) return <></>;
    const Elem = modalMapper[activeModal as keyof typeof modalMapper];
    return <Elem onModalClose={() => setActiveModal('')} />;
  };

  return (
    <Container>
      {showToast && <Toast label="Not enough numbers" onClick={() => setShowToast(false)} />}
      <Wrapper>
        <Navbar title="Take-Home" onClick={setActiveModal} />
        <Challenge
          animateReveal={validateAnswer}
          animateShakeRow={animateShakeRow}
          onAnimationEnd={handleOnAnimationEnd}
        />
        <Keyboard onEnter={handleOnEnter} onDelete={handleOnDelete} />
      </Wrapper>
      {renderModal()}
    </Container>
  );
};

export default Game;
