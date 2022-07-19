import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import axios from 'axios';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { searchAction } from '../../store/modules/search/search.slice';
import { selectIsDestinationModalOpen } from '../../store/modules/modal/modal.select';
import {
  selectLocal,
  selectSearchRegion,
  selectSearchCostRange,
  selectSearchStayType,
  selectSearchTheme,
} from '../../store/modules/search/search.select';
import { fetchLocal, getSearchResult } from '../../api/search';

import MainModal from '../main-modal/mainModal.component';
import { RegionButtonContainer, RegionButton } from './destinationModal.style';

export default function DestinationModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const isDestinationModalOpen = useAppSelector(selectIsDestinationModalOpen);
  const searchRegion = useAppSelector(selectSearchRegion);
  const local = useAppSelector(selectLocal);

  const stayIds = useAppSelector(selectSearchStayType);
  const themeIds = useAppSelector(selectSearchTheme);
  const [minprice, maxprice] = useAppSelector(selectSearchCostRange);

  const handleDestinationModal = () => {
    dispatch(modalAction.radioDestinationModal());
  };

  const handleRegionClick = (props: { id: number; name: string }) => {
    dispatch(searchAction.setSearchRegionName(props));
    fetchSearchResult(props.id);
    handleDestinationModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchLocal());
    };

    fetchData();
  }, [dispatch]);

  const fetchSearchResult = async (clickedRegionIdx: number) => {
    const data = {
      localId: clickedRegionIdx,
      stayIds: stayIds,
      themeIds: themeIds,
      minprice: minprice,
      maxprice: maxprice,
    };
    await dispatch(getSearchResult(data));
  };

  return (
    <MainModal
      isOpen={isDestinationModalOpen}
      onClose={handleDestinationModal}
      title="어디로 떠날까요?"
      contentWidth={600}
    >
      <RegionButtonContainer>
        <ul>
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
    </MainModal>
  );
}
