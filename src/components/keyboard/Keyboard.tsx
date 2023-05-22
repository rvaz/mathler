import KeyboardKey from '@mathler/components/keyboard-key';
import { configKeyboard } from './utils';
import { Wrapper, GridKeys } from './Keyboard.styles';

type KeyboardProps = {
  isAdvanced?: boolean;
  onEnter?: () => void;
  onDelete?: () => void;
  onKeyPress?: (keyValue: string) => void;
};

const Keyboard: React.FC<KeyboardProps> = ({
  isAdvanced = false,
  onEnter,
  onDelete,
  onKeyPress,
}) => {
  const handleOnclick = (keyId: string) => {
    if (keyId === 'enter') return onEnter?.();
    if (keyId === 'delete') return onDelete?.();
    return onKeyPress?.(keyId);
  };

  return (
    <Wrapper>
      <GridKeys>
        {configKeyboard.map(({ id, label, icon, isAdvancedKey }) => {
          if (isAdvancedKey && !isAdvanced) return <div key={id} />;
          return (
            <KeyboardKey
              key={id}
              label={label}
              icon={icon}
              status="none"
              onClick={() => handleOnclick(id)}
            />
          );
        })}
      </GridKeys>
    </Wrapper>
  );
};

export default Keyboard;
