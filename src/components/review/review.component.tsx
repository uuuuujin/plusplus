import { InnerContainer } from '../../routes/mypage/mypage.style';
import { Line } from '../payment/payment.style';
import {TitleText} from "../../routes/mypage/mypage.style";
import {useEffect} from "react";

const ReviewComponent = () => {

  useEffect ( () => {
    alert('아직 개발중입니다!')
  })
  return (
    <InnerContainer>
      <TitleText>나의 후기</TitleText>
      <Line />
    </InnerContainer>
  );
};

export default ReviewComponent;
