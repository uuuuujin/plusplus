import { useState } from 'react';
import Slider from '@mui/material/Slider';

import MainModal from '../main-modal/mainModal.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsFilterModalOpen } from '../../store/modules/modal/modal.select';

import {
  FilterModalContainer,
  CostSliderContainer,
  CostContainer,
  CostTitle,
  CostInputContainer,
  CategoryContainer,
  CategoryTitle,
  Bottom,
  SearchButton,
  CheckboxContainer,
  CheckboxElement,
  CheckboxInput,
  CheckboxLabel,
} from './filterModal.style';

interface FilterType {
  title: string;
  id: string;
}

export default function FilterModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const isFilterModalOpen = useAppSelector(selectIsFilterModalOpen);
  const handleFilterModal = () => {
    dispatch(modalAction.radioFilterModal());
  };

  const MIN_DISTANCE: number = 5;
  const [costValue, setCostValue] = useState([0, 100]);

  const handleCostRange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setCostValue([
        Math.min(newValue[0], costValue[1] - MIN_DISTANCE),
        costValue[1],
      ]);
    } else {
      setCostValue([
        costValue[0],
        Math.max(newValue[1], costValue[0] + MIN_DISTANCE),
      ]);
    }
  };

  // 가격 input에 직접 입력한다면 사용할 함수..
  // const handleCostMinimum = (e: any) => {
  //   if (e.target.value > 100) setCostValue([95, costValue[1]]);
  //   else if (e.target.value > costValue[1])
  //     setCostValue([costValue[1] - MIN_DISTANCE, costValue[1]]);
  //   else if (!e.target.value) setCostValue([1, costValue[1]]);
  //   else setCostValue([e.target.value, costValue[1]]);
  // };

  // const handleCostMaximum = (e: any) => {
  //   if (e.target.value > 100) setCostValue([costValue[0], 100]);
  //   else if (e.target.value < costValue[0])
  //     setCostValue([costValue[0], Number(costValue[0]) + MIN_DISTANCE]);
  //   else setCostValue([costValue[0], e.target.value]);
  // };

  const STAY_TYPE: FilterType[] = [
    {
      title: '게스트 하우스',
      id: 'guest_house',
    },
    {
      title: '한옥',
      id: 'hanok',
    },
    {
      title: '캠핑 & 아웃도어',
      id: 'camping_outdoor',
    },
    {
      title: '민박',
      id: 'bnb',
    },
    {
      title: '호텔',
      id: 'hotel',
    },
  ];

  const THEME_TYPE: FilterType[] = [
    {
      title: '도심 속 휴식',
      id: 'rest_in_city',
    },
    {
      title: '자연 속 휴식',
      id: 'rest_in_nature',
    },
    {
      title: '수영장',
      id: 'swimming_pool',
    },
    {
      title: '오션뷰',
      id: 'ocean_view',
    },
    {
      title: '시티뷰',
      id: 'city_view',
    },
    {
      title: '아웃도어',
      id: 'outdoor',
    },
    {
      title: '파티하우스',
      id: 'party_house',
    },
    {
      title: '여행자 교류',
      id: 'traveler_interact',
    },
    {
      title: '스파',
      id: 'spa',
    },
    {
      title: '노천탕',
      id: 'open_air_bath',
    },
  ];

  return (
    <MainModal
      isOpen={isFilterModalOpen}
      onClose={handleFilterModal}
      title="필터"
      contentWidth={700}
    >
      <div>
        <FilterModalContainer>
          <CategoryContainer>
            <CategoryTitle>가격 범위</CategoryTitle>
            <CostSliderContainer>
              <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={costValue}
                onChange={handleCostRange}
                valueLabelDisplay="auto"
                disableSwap
              />
            </CostSliderContainer>
            <CostContainer>
              <div>
                <CostTitle>최저요금</CostTitle>
                <CostInputContainer>{costValue[0]}만원</CostInputContainer>
              </div>
              <span> ~ </span>
              <div>
                <CostTitle>최고요금</CostTitle>
                <CostInputContainer>{costValue[1]}만원</CostInputContainer>
              </div>
            </CostContainer>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryTitle>스테이 유형</CategoryTitle>
            <CheckboxContainer>
              {STAY_TYPE.map((item, key) => {
                return (
                  <CheckboxElement key={key}>
                    <CheckboxInput type="checkbox" id={item.id} />
                    <CheckboxLabel htmlFor={item.id}>
                      {item.title}
                    </CheckboxLabel>
                  </CheckboxElement>
                );
              })}
            </CheckboxContainer>
          </CategoryContainer>

          <CategoryContainer>
            <CategoryTitle>테마</CategoryTitle>
            <CheckboxContainer>
              {THEME_TYPE.map((item, key) => {
                return (
                  <CheckboxElement key={key}>
                    <CheckboxInput type="checkbox" id={item.id} />
                    <CheckboxLabel htmlFor={item.id}>
                      {item.title}
                    </CheckboxLabel>
                  </CheckboxElement>
                );
              })}
            </CheckboxContainer>
          </CategoryContainer>
        </FilterModalContainer>
        <Bottom>
          <SearchButton onClick={handleFilterModal}>검색하기</SearchButton>
        </Bottom>
      </div>
    </MainModal>
  );
}
