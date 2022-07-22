import { InnerContainer } from '../../routes/mypage/mypage.style';
import { Line } from '../payment/payment.style';
import { TitleText } from '../wishlist/wishlist.style';

const ReviewComponent = () => {
  return (
    <InnerContainer>
      <TitleText>나의 후기</TitleText>
      <Line />
    </InnerContainer>
  );
};

export default ReviewComponent;
