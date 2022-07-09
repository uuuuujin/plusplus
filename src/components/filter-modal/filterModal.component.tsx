import MainModal from '../main-modal/mainModal.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsFilterModalOpen } from '../../store/modules/modal/modal.select';

import {
  FilterModalContainer,
  CategoryContainer,
  CategoryTitle,
  Bottom,
  SearchButton,
  CheckboxContainer,
  CheckboxElement,
  CheckboxInput,
  CheckboxLabel
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
    },{
      title: '호텔',
      id: 'hotel',
    }
  ]

  const THEME_TYPE: FilterType[] = [
    {
      title: '도심 속 휴식',
      id: 'rest_in_city'
    },
    {
      title: '자연 속 휴식',
      id: 'rest_in_nature'
    },
    {
      title: '수영장',
      id: 'swimming_pool'
    },
    {
      title: '오션뷰',
      id: 'ocean_view'
    },
    {
      title: '시티뷰',
      id: 'city_view'
    },
    {
      title: '아웃도어',
      id: 'outdoor'
    },
    {
      title: '파티하우스',
      id: 'party_house'
    },
    {
      title: '여행자 교류',
      id: 'traveler_interact'
    },
    {
      title: '스파',
      id: 'spa'
    },
    {
      title: '노천탕',
      id: 'open_air_bath'
    },
    
  ]

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
            <div>
              가격 레이아웃은 추후에 정하기..
            </div>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryTitle>스테이 유형</CategoryTitle>
            <CheckboxContainer>
              {STAY_TYPE.map((item, key) => {
                return (
                  <CheckboxElement key={key}>
                    <CheckboxInput type="checkbox" id={item.id}/>
                    <CheckboxLabel htmlFor={item.id}>{item.title}</CheckboxLabel>
                  </CheckboxElement>
                )
              })}
            </CheckboxContainer>
          </CategoryContainer>

          <CategoryContainer>
            <CategoryTitle>테마</CategoryTitle>
            <CheckboxContainer>
              {THEME_TYPE.map((item, key) => {
                return (
                  <CheckboxElement key={key}>
                    <CheckboxInput type="checkbox" id={item.id}/>
                    <CheckboxLabel htmlFor={item.id}>{item.title}</CheckboxLabel>
                  </CheckboxElement>
                )
              })}
            </CheckboxContainer>
          </CategoryContainer> 
        </FilterModalContainer>
        <Bottom>
          <SearchButton onClick={handleFilterModal}>검색하기</SearchButton>
        </Bottom>
      </div>
      
    </MainModal>
  )
}