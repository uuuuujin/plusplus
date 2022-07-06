import { GrClose } from 'react-icons/gr';

import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalSubmitButton,
} from './mainModal.style';

export interface ModalProp {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: JSX.Element;
  contentWidth?: number;
  buttonTitle?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  contentWidth = 500,
  buttonTitle,
}: ModalProp): JSX.Element {
  return (
    <ModalContainer className={isOpen ? 'show' : ''} onClick={onClose}>
      <ModalContent width={contentWidth} onClick={(e) => e.stopPropagation()}>
        <ModalHeader>{title}</ModalHeader>
        <GrClose className="closeButton" onClick={onClose} />
        <ModalBody>{children}</ModalBody>

        {buttonTitle && (
          <ModalSubmitButton>
            <button>{buttonTitle}</button>
          </ModalSubmitButton>
        )}
      </ModalContent>
    </ModalContainer>
  );
}
