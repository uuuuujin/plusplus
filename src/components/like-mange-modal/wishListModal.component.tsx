import MainModal from '../main-modal/mainModal.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { selectIsWishManageModalOpen } from '../../store/modules/modal/modal.select';
import { modalAction } from '../../store/modules/modal/modal.slice';
import styled from 'styled-components';
import { WishListItemProps } from '../wishlist-Item/wishlistitem.component';

export const WishManageModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ConfirmButton = styled.button`
  flex: 1 1;
  height: 60px;
  background-color: transparent;
  border: none;
  border-top: 1px solid #ddd;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  color: #2196f3;
`;

export const CancelButton = styled.button`
  flex: 1 1;
  height: 60px;
  background-color: transparent;
  color: #ff6969;
  border: none;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  cursor: pointer;
  padding: 10px;
  font-size: 14px;
`;

export const ContentMessage = styled.div`
  height: 200px;
  padding: 20px 40px;
`;

const WishListModal = ({ item }: WishListItemProps) => {
  const dispatch = useAppDispatch();

  const isWishManageModalOpen = useAppSelector(selectIsWishManageModalOpen);
  const onCloseModal = () => {
    dispatch(modalAction.radioWishManageModal());
  };

  return (
    <MainModal
      isOpen={isWishManageModalOpen}
      onClose={onCloseModal}
      title="찜 목록에서 제거하시겠습니까?"
      contentWidth={500}
    >
      <WishManageModalContainer>
        <ContentMessage>
          {item.name} 숙소를 찜 목록에서 제거 하시겠어요!?
        </ContentMessage>
        <ButtonBox>
          <CancelButton onClick={onCloseModal}>취소</CancelButton>
          <ConfirmButton>확인</ConfirmButton>
        </ButtonBox>
      </WishManageModalContainer>
    </MainModal>
  );
};

export default WishListModal;
