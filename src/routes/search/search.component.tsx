import { useState } from 'react';
import Container from '../../components/container/container.component';
import MainModal from '../../components/main-modal/mainModal.component';

export default function Search(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen((v) => !v);
  };

  return (
    <Container>
      <div>
        <div>검색화면 입니다요~</div>
        <button onClick={handleModal}>모달 테스트 버튼</button>

        <MainModal
          isOpen={isModalOpen}
          onClose={handleModal}
          title="어디로 떠날까요?"
          contentWidth={600}
          buttonTitle="검색하기"
        >
          <span>하하하</span>
        </MainModal>
      </div>
    </Container>
  );
}
