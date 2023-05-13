import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Wrapper, H2, StyledButton, ContentWrapper } from './Modal.styles';

export type ModalProps = {
  title: string;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ title, children }) => {
  const [containerEl] = useState(document.createElement('div'));
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    document.body.appendChild(containerEl);
    return () => {
      document.body.removeChild(containerEl);
    };
  }, []);

  const handleOnClose = (ev: React.MouseEvent) => {
    setIsActive(false);
  };

  if (!isActive) return <></>;

  return createPortal(
    <Backdrop onClick={handleOnClose}>
      <Wrapper role="alertdialog" aria-modal onClick={(ev) => ev.stopPropagation()}>
        <H2>{title}</H2>
        <StyledButton icon="Close" onClick={handleOnClose} />
        <ContentWrapper>{children}</ContentWrapper>
      </Wrapper>
    </Backdrop>,
    containerEl,
  );
};

export default Modal;
