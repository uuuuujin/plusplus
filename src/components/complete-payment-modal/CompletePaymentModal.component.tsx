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
import { navigatorAction } from '../../store/modules/navigator/navigator.slice';

export interface IPaymentModalProps {
  checkInDate: string;
  checkOutDate: string;
  nickName: string;
  x: string;
  y: string;
  phoneNumber: string;
  stationName: string;
  roomName: string;
}
export interface PaymentModalProps {
  props: IPaymentModalProps;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const CompletePaymentModal = (props: IPaymentModalProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isPaymentModalOpen = useAppSelector(selectIsPaymentCompleteModalOpen);
  console.log(props.x, props.y);
  const onCloseModal = () => {
    dispatch(modalAction.radioPaymentCompleteModal());
  };

  const onClickHomeButton = () => {
    onCloseModal();
    dispatch(navigatorAction.setCurrnetPage('home'));
    navigate(`/`);
  };

  const onClickMyPageButton = () => {
    onCloseModal();
    dispatch(navigatorAction.setCurrnetPage('mypage'));
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
            <BookingText>{props.nickName}</BookingText>
          </BookingInfoBox>
          <BookingInfoBox>
            <TitleText>전화번호:</TitleText>
            <BookingText>{props.phoneNumber}</BookingText>
          </BookingInfoBox>
          <BookingInfoBox>
            <TitleText>방정보:</TitleText>
            <BookingText>
              {props.stationName}({props.roomName})
            </BookingText>
          </BookingInfoBox>
          <BookingInfoBox>
            <TitleText>체크인 날짜:</TitleText>
            <BookingText>{props.checkInDate}</BookingText>
          </BookingInfoBox>
          <BookingInfoBox>
            <TitleText>체크아웃 날짜:</TitleText>
            <BookingText>{props.checkOutDate}</BookingText>
          </BookingInfoBox>
        </BookingInfoWrap>
        <HeadText>위치정보</HeadText>
        <Map y={parseFloat(props.y)} x={parseFloat(props.x)} />
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
