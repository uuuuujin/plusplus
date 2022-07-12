import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { searchAction } from '../../store/modules/search/search.slice';
import { selectIsHeaderDestinationModalOpen } from '../../store/modules/modal/modal.select';
import { selectSearchRegionName } from '../../store/modules/search/search.select';

import MainModal from '../main-modal/mainModal.component';

import {
  RegionButtonContainer,
  RegionButton,
  SearchButton,
  Bottom,
} from './headerDestinationModal.style';

export default function HeaderDestinationModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const isHeaderDestinationModalOpen = useAppSelector(
    selectIsHeaderDestinationModalOpen
  );
  const searchRegionName = useAppSelector(selectSearchRegionName);
  const handleDestinationModal = () => {
    dispatch(modalAction.radioHeaderDestinationModal());
  };
  const handleRegionClick = (region: string) => {
    dispatch(searchAction.setSearchRegionName(region));
    // handleDestinationModal();
  };

  const REGIONAL_NAME = [
    '국내전체',
    '서울',
    '경기',
    '인천',
    '강원',
    '대전',
    '충청',
    '경상',
    '부산',
    '울산',
    '대구',
    '전라',
    '광주',
    '제주',
  ];

  return (
    <MainModal
      isOpen={isHeaderDestinationModalOpen}
      onClose={handleDestinationModal}
      title="어디로 떠날까요?"
      contentWidth={600}
    >
      <div>
        <RegionButtonContainer>
          <ul>
            {REGIONAL_NAME.map((item) => {
              return (
                <li key={item}>
                  <RegionButton
                    regionName={item}
                    clickedRegionName={searchRegionName}
                    onClick={() => handleRegionClick(item)}
                  >
                    {item}
                  </RegionButton>
                </li>
              );
            })}
          </ul>
        </RegionButtonContainer>
        <Bottom>
          <SearchButton onClick={handleDestinationModal}>검색하기</SearchButton>
        </Bottom>
      </div>
    </MainModal>
  );
}
