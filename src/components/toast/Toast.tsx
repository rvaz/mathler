import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Wrapper } from './Toast.styles';

export type ToastProps = {
  label?: string;
  onClick?: () => void;
};

const Toast: React.FC<ToastProps> = ({ label = '', onClick }) => {
  const [containerEl] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(containerEl);
    return () => {
      document.body.removeChild(containerEl);
    };
  }, []);

  const handleOnClick = (ev: React.MouseEvent) => {
    onClick?.();
  };

  return createPortal(
    <Wrapper role="alertdialog" aria-modal onClick={handleOnClick}>
      {label}
    </Wrapper>,
    containerEl,
  );
};

export default Toast;
