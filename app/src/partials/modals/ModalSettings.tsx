import Modal, { ModalProps } from '@mathler/components/modal';

const ModalSettings: React.FC<ModalProps> = ({ ...rest }) => {
  return <Modal {...rest} title="Settings" />;
};

export default ModalSettings;
