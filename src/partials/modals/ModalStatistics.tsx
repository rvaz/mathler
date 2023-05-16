import Modal, { ModalProps } from '@mathler/components/modal';

const ModalStatistics: React.FC<ModalProps> = ({ ...rest }) => {
  return <Modal {...rest} title="Statistics" />;
};

export default ModalStatistics;
