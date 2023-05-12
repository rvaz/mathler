import KeyboardKey from '@mathler/components/keyboard-key';
import { configKeyboard } from './utils';
import { Wrapper, GridKeys } from './Keyboard.styles';

type KeyboardProps = {
  isAdvanced?: boolean;
};

const Keyboard: React.FC<KeyboardProps> = ({ isAdvanced = false }) => {
  return (
    <Wrapper>
      <GridKeys>
        {configKeyboard.map(({ id, label, icon, isAdvancedKey }) => {
          if (isAdvancedKey && !isAdvanced) return <div />;
          return <KeyboardKey key={id} label={label} icon={icon} status="none" />;
        })}
      </GridKeys>
    </Wrapper>
  );
};

export default Keyboard;
