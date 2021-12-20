import Modal from 'components/Modal';
import {FC, ReactNode, useState} from 'react';

export const useModal = (
  children: ReactNode,
  defaultOpen?: boolean
): [() => void, FC] => {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const handleModal = () => {
    setOpen(prev => !prev);
  };

  return [
    handleModal,
    () => (open ? <Modal onClose={handleModal}>{children}</Modal> : null),
  ];
};
