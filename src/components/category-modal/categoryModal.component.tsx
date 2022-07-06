import { GrClose } from 'react-icons/gr';

import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalSubmitButton,
  ModalBody,
} from './categoryModal.style';

export interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: JSX.Element;
  contentWidth?: number;
}

export default function CategoryModal({
  isOpen,
  onClose,
  title,
  children,
  contentWidth = 300,
}: ModalProp): JSX.Element {
  return (
    <ModalContainer className={isOpen ? 'show' : ''}>
      <ModalContent width={contentWidth}>
        <ModalHeader>{title}</ModalHeader>
        <GrClose className="closeButton" onClick={onClose} />
        <ModalBody>{children}</ModalBody>
        <ModalSubmitButton onClick={onClose}>
          <button>적용하기</button>
        </ModalSubmitButton>
      </ModalContent>
    </ModalContainer>
  );
}
