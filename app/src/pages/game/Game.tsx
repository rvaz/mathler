import { useState } from 'react';
import Container from '@mathler/components/container';
import Navbar from '@mathler/components/navbar';
import Toast from '@mathler/components/toast';
import Challenge from '@mathler/components/challenge';
import Keyboard from '@mathler/components/keyboard';
import { Wrapper } from './Game.styles';

const Game = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Toast label="Not enough numbers" />
      <Wrapper>
        <Navbar title="Take-Home" />
        <Challenge />
        <Keyboard />
      </Wrapper>
    </Container>
  );
};

export default Game;
