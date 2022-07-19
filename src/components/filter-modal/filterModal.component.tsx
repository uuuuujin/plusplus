import { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { searchAction } from '../../store/modules/search/search.slice';
import { selectIsFilterModalOpen } from '../../store/modules/modal/modal.select';
import {
  selectStayType,
  selectTheme,
} from '../../store/modules/search/search.select';
import { fetchStayType, fetchTheme } from '../../api/search';
import MainModal from '../main-modal/mainModal.component';
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

export default function FilterModal(): JSX.Element {
  const dispatch = useAppDispatch();

  const isFilterModalOpen = useAppSelector(selectIsFilterModalOpen);
  const stayType = useAppSelector(selectStayType);
  const theme = useAppSelector(selectTheme);

  const [stayCheckedList, setStayCheckedList] = useState<number[]>([]);
  const [themeCheckedList, setThemeCheckedList] = useState<number[]>([]);

  const handleFilterModal = () => {
    dispatch(modalAction.radioFilterModal());
  };

  const onCheckedStay = (checked: boolean, item: number) => {
    if (checked) setStayCheckedList((prev) => [...prev, item]);
    else setStayCheckedList(stayCheckedList.filter((el) => el !== item));
  };

  const onCheckedTheme = (checked: boolean, item: number) => {
    if (checked) setThemeCheckedList((prev) => [...prev, item]);
    else setThemeCheckedList(themeCheckedList.filter((el) => el !== item));
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

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchStayType());
      await dispatch(fetchTheme());
    };

    fetchData();
  }, [dispatch]);

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
              {stayType.map((item, key) => {
                return (
                  <CheckboxElement key={key}>
                    <CheckboxInput
                      type="checkbox"
                      id={String(item.id)}
                      value={item.id}
                      onChange={(e) =>
                        onCheckedStay(e.target.checked, Number(e.target.value))
                      }
                    />
                    <CheckboxLabel htmlFor={String(item.id)}>
                      {item.name}
                    </CheckboxLabel>
                  </CheckboxElement>
                );
              })}
            </CheckboxContainer>
          </CategoryContainer>

          <CategoryContainer>
            <CategoryTitle>테마</CategoryTitle>
            <CheckboxContainer>
              {theme.map((item, key) => {
                return (
                  <CheckboxElement key={key}>
                    <CheckboxInput
                      type="checkbox"
                      id={String(item.id)}
                      value={item.id}
                      onChange={(e) =>
                        onCheckedTheme(e.target.checked, Number(e.target.value))
                      }
                    />
                    <CheckboxLabel htmlFor={String(item.id)}>
                      {item.name}
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
