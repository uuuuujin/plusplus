import MainModal from '../main-modal/mainModal.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectIsErrorModalOpen } from '../../store/modules/modal/modal.select';
import { modalAction } from '../../store/modules/modal/modal.slice';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  ButtonBox,
  ConfirmButton,
  ContentText,
  ErrorModalContainer,
} from './errorModal.style';

export interface IErrorModalProps {
  title: string;
  content: string;
}

export const ErrorModal = ({ title, content }: IErrorModalProps) => {
  const dispatch = useAppDispatch();
  const isErrorModalOpen = useAppSelector(selectIsErrorModalOpen);
  const navigate = useNavigate();

  const onCloseModal = () => {
    dispatch(modalAction.radioErrorModal());
  };

  const onNavigateHome = () => {
    onCloseModal();
    navigate(`/`);
  };

  return (
    <MainModal isOpen={isErrorModalOpen} onClose={onNavigateHome} title={title}>
      <ErrorModalContainer>
        <ContentText>{content}</ContentText>
        <ButtonBox>
          <ConfirmButton onClick={onNavigateHome}>확인</ConfirmButton>
        </ButtonBox>
      </ErrorModalContainer>
    </MainModal>
  );
};

export default ErrorModal;
