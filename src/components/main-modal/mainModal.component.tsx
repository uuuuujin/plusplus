import { GrClose } from 'react-icons/gr';

import {
  ModalContainer,
  ModalContent,
  ModalHeader,
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

export default function MainModal({
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
        {title && <ModalHeader>{title}</ModalHeader>}
        <GrClose className="closeButton" onClick={onClose} />
        {children}
        {buttonTitle && (
          <ModalSubmitButton onClick={onClose}>
            <button>{buttonTitle}</button>
          </ModalSubmitButton>
        )}
      </ModalContent>
    </ModalContainer>
  );
}
