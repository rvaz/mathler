import Button from '@mathler/components/button';
import { Wrapper, H1, LeftActions, RightActions } from './Navbar.styles';

type NavbarProps = {
  title: string;
  actions?: [];
};

const Navbar: React.FC<NavbarProps> = ({ title, actions }) => {
  return (
    <Wrapper>
      <LeftActions>
        <Button icon="Question" iconSize={14} />
        <Button icon="Alien" iconSize={16} />
      </LeftActions>
      <H1>{title}</H1>
      <RightActions>
        <Button icon="BarChart" iconSize={16} />
        <Button icon="Settings" iconSize={14} />
      </RightActions>
    </Wrapper>
  );
};

export default Navbar;
