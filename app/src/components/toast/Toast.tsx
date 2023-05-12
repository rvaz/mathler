import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Wrapper } from './Toast.styles';

export type ToastProps = {
  label?: string;
};

const Toast: React.FC<ToastProps> = ({ label = '' }) => {
  const [containerEl] = useState(document.createElement('div'));
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    document.body.appendChild(containerEl);
    return () => {
      document.body.removeChild(containerEl);
    };
  }, []);

  const handleOnClick = (ev: React.MouseEvent) => {
    setIsActive(false);
    containerEl.remove();
  };

  if (!isActive) return <></>;

  return createPortal(
    <Wrapper role="alertdialog" aria-modal onClick={handleOnClick}>
      {label}
    </Wrapper>,
    containerEl,
  );
};

export default Toast;
