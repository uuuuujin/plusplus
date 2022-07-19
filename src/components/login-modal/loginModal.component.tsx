import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsLoginModalOpen } from '../../store/modules/modal/modal.select';
import { ROUTES } from '../../routes/routes';

import MainModal from '../main-modal/mainModal.component';

import {
  ModalContainer,
  Title,
  ButtonContainer,
  Button,
} from './loginModal.style';

export default function LoginModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const isLoginModalOpen = useAppSelector(selectIsLoginModalOpen);
  const handleLoginModal = () => {
    dispatch(modalAction.radioLoginModal());
  };

  return (
    <MainModal
      isOpen={isLoginModalOpen}
      onClose={handleLoginModal}
      title="로그인이 필요합니다."
    >
      <ModalContainer>
        <Title>로그인 페이지로 이동하시겠습니까?</Title>
        <ButtonContainer>
          <Link to={ROUTES.LOGIN.path}>
            <Button onClick={handleLoginModal}>예</Button>
          </Link>

          <Button className="no" onClick={handleLoginModal}>
            아니오
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </MainModal>
  );
}
