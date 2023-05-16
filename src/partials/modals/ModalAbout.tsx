import Modal, { ModalProps } from '@mathler/components/modal';
import Card from '@mathler/components/card';
import { CardExample } from './ModalAbout.styles';

const ModalAbout: React.FC<ModalProps> = ({ ...rest }) => {
  return (
    <Modal {...rest} title="How to play Mathler">
      <br />
      <p>
        Try to find the hidden calculation in 6 guesses!
        <br />
        After each guess, the color of the tiles will change to show how close you are to the
        solution.
      </p>
      <CardExample>
        <Card status="wrong" label="7" />
        <Card status="almost" label="*" />
        <Card status="almost" label="4" />
        <Card status="correct" label="-" />
        <Card status="correct" label="1" />
        <Card status="wrong" label="4" />
      </CardExample>
      <p>
        • Green are in the correct place.
        <br />
        • Orange are in the solution, but in a different place.
        <br />• Gray are not in the solution.
      </p>
      <br />
      <p>
        <b>Additional rules</b>
      </p>
      <br />
      <p>
        • Numbers and operators can appear multiple times.
        <br />
        • Calculate / or * before - or + (order of operations).
        <br />
        • Commutative solutions are accepted, for example 20+7+3 and 3+7+20.
        <br />• Commutative solutions will be automatically rearranged to the exact solution.
      </p>
    </Modal>
  );
};

export default ModalAbout;
