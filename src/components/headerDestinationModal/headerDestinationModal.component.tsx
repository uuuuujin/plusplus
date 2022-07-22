import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { searchAction } from '../../store/modules/search/search.slice';
import { selectIsHeaderDestinationModalOpen } from '../../store/modules/modal/modal.select';
import {
  selectSearchRegion,
  selectLocal,
} from '../../store/modules/search/search.select';
import { fetchLocal } from '../../api/search';
import { IndexNameType } from '../../store/modules/search/search.typs';

import MainModal from '../main-modal/mainModal.component';
import { ROUTES } from '../../routes/routes';
import {
  RegionButtonContainer,
  RegionButton,
  SearchLink,
  Bottom,
  SearchButton,
} from './headerDestinationModal.style';

export default function HeaderDestinationModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const isHeaderDestinationModalOpen = useAppSelector(
    selectIsHeaderDestinationModalOpen
  );
  const searchRegion = useAppSelector(selectSearchRegion);
  const local = useAppSelector(selectLocal);

  const handleDestinationModal = () => {
    dispatch(modalAction.radioHeaderDestinationModal());
  };
  const handleRegionClick = (props: IndexNameType) => {
    dispatch(searchAction.setSearchRegionName(props));
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchLocal());
    };

    fetchData();
  }, [dispatch]);

  return (
    <MainModal
      isOpen={isHeaderDestinationModalOpen}
      onClose={handleDestinationModal}
      title="어디로 떠날까요? ✈️"
      contentWidth={600}
    >
      <div>
        <RegionButtonContainer>
          <ul>
            <li>
              <RegionButton
                regionName="국내전체"
                clickedRegionName={searchRegion.name}
                onClick={() => handleRegionClick({ id: 0, name: '국내전체' })}
              >
                국내전체
              </RegionButton>
            </li>
            {local.map((item) => {
              return (
                <li key={item.name}>
                  <RegionButton
                    regionName={item.name}
                    clickedRegionName={searchRegion.name}
                    onClick={() =>
                      handleRegionClick({ id: item.id, name: item.name })
                    }
                  >
                    {item.name}
                  </RegionButton>
                </li>
              );
            })}
          </ul>
        </RegionButtonContainer>
        <Bottom>
          <SearchLink onClick={handleDestinationModal} to={ROUTES.SEARCH.path}>
            <SearchButton>검색하기</SearchButton>
          </SearchLink>
        </Bottom>
      </div>
    </MainModal>
  );
}
