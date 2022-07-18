import MainModal from '../main-modal/mainModal.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsPaymentCompleteModalOpen } from '../../store/modules/modal/modal.select';
import Map from '../map/map.component';
import {
  BookingInfoBox,
  BookingInfoWrap,
  BookingText,
  ButtonBox,
  HeadText,
  MoveHomeButton,
  MoveMypageButton,
  PaymentModalContainer,
  TitleText,
} from './CompletePaymentModal.style';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    kakao: any;
  }
}

const CompletePaymentModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isPaymentModalOpen = useAppSelector(selectIsPaymentCompleteModalOpen);

  const onCloseModal = () => {
    dispatch(modalAction.radioPaymentCompleteModal());
  };

  const onClickHomeButton = () => {
    onCloseModal();
    navigate(`/`);
  };

  const onClickMyPageButton = () => {
    onCloseModal();
    navigate(`/mypage`);
  };

  return (
    <MainModal
      isOpen={isPaymentModalOpen}
      contentWidth={500}
      onClose={onClickMyPageButton}
      title="결제가 완료되었습니다.🎉"
    >
      <PaymentModalContainer>
        <HeadText>결제자 정보</HeadText>
        <BookingInfoWrap>
          <BookingInfoBox>
            <TitleText>예약자:</TitleText>
            <BookingText>이용준</BookingText>
          </BookingInfoBox>
          <BookingInfoBox>
            <TitleText>전화번호:</TitleText>
            <BookingText>010-1234-5678</BookingText>
          </BookingInfoBox>
          <BookingInfoBox>
            <TitleText>방정보:</TitleText>
            <BookingText>호근머들 101호실(1인실)</BookingText>
          </BookingInfoBox>
        </BookingInfoWrap>
        <HeadText>위치정보</HeadText>
        <Map y={33.244578611023655} x={126.5345669720284} />
        <ButtonBox>
          <MoveHomeButton onClick={onClickHomeButton}>
            홈으로 이동
          </MoveHomeButton>
          <MoveMypageButton onClick={onClickMyPageButton}>
            마이페이지이동
          </MoveMypageButton>
        </ButtonBox>
      </PaymentModalContainer>
    </MainModal>
  );
};
export default CompletePaymentModal;
