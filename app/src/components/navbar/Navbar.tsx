import Button from '@mathler/components/button';
import { Wrapper, H1, LeftActions, RightActions } from './Navbar.styles';

type NavbarProps = {
  title: string;
  onClick?: (newActiveModal: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ title, onClick }) => {
  return (
    <Wrapper>
      <LeftActions>
        <Button icon="Question" iconSize={14} onClick={() => onClick?.('about')} />
        <Button icon="Alien" iconSize={16} onClick={() => onClick?.('language')} />
      </LeftActions>
      <H1>{title}</H1>
      <RightActions>
        <Button icon="BarChart" iconSize={16} onClick={() => onClick?.('statistics')} />
        <Button icon="Settings" iconSize={14} onClick={() => onClick?.('settings')} />
      </RightActions>
    </Wrapper>
  );
};

export default Navbar;
