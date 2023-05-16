import Modal, { ModalProps } from '@mathler/components/modal';

const ModalLanguage: React.FC<ModalProps> = ({ ...rest }) => {
  return <Modal {...rest} title="Language" />;
};

export default ModalLanguage;
