import MainModal from '../main-modal/mainModal.component';
import { useAppSelector } from '../../hooks/index.hook';
import { WishListItemProps } from '../wishlist-Item/wishlistitem.component';
import {
  ModalContainer,
  Title,
  ButtonContainer,
  Button,
} from './wishListModal.styled';
import { deleteWishItem, getWishList } from '../../api/wishlist';
import { selectAccessToken } from '../../store/modules/user/user.select';

interface WishListItemModalProps extends WishListItemProps {
  setModal: () => void;
}

const WishListModal = ({ item, setList, setModal }: WishListItemModalProps) => {
  const accessToken = useAppSelector(selectAccessToken);
  console.log(item);

  const onDeleteWishItem = () => {
    const res = deleteWishItem(accessToken, item.station_id);
    res.then(() => {
      const data = getWishList(accessToken);
      data.then((result) => setList(result.data));
    });
    setModal();
  };

  return (
    <MainModal
      isOpen={true}
      onClose={() => setModal()}
      title="찜 목록에서 제거하시겠습니까?"
      contentWidth={500}
    >
      <ModalContainer>
        <Title>
          <div>{item.station_name} &nbsp;</div>
          숙소를 찜 목록에서 제거 하시겠어요?
        </Title>
        <ButtonContainer>
          <Button className="no" onClick={() => setModal()}>
            취소
          </Button>
          <Button onClick={onDeleteWishItem}>확인</Button>
        </ButtonContainer>
      </ModalContainer>
    </MainModal>
  );
};

export default WishListModal;
