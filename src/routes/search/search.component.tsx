import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsDestinationModalOpen } from '../../store/modules/modal/modal.select';
import { selectSearchRegionName } from '../../store/modules/search/search.select';

import { IoIosArrowDown } from 'react-icons/io';
import { GrPowerReset } from 'react-icons/gr';
import Container from '../../components/container/container.component';
import DestinationModal from '../../components/destination-modal/destinationModal.component';

import {
  Header,
  FilterTop,
  FilterWrap,
  FilterBottom,
  CategoryContainer,
  CategoryTitle,
  CagtegoryButton,
  ResetButton,
} from './search.style';

export default function Search(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleDestinationModal = () => {
    dispatch(modalAction.radioDestinationModal());
  };
  const searchRegionName = useAppSelector(selectSearchRegionName);

  return (
    <Container>
      <div>
        <Header>헤더 들어갈 자리</Header>

        <div>
          <FilterTop>
            <FilterWrap>
              <CategoryContainer>
                <CategoryTitle>여행지</CategoryTitle>
                <CagtegoryButton onClick={handleDestinationModal}>
                  <span>{searchRegionName ? searchRegionName : '여행지'}</span>
                  <IoIosArrowDown />
                </CagtegoryButton>
              </CategoryContainer>
              <CategoryContainer>
                <CategoryTitle>체크인</CategoryTitle>
                <CagtegoryButton>
                  <span>체크인</span>
                  <IoIosArrowDown />
                </CagtegoryButton>
              </CategoryContainer>
              <CategoryContainer>
                <CategoryTitle>체크아웃</CategoryTitle>
                <CagtegoryButton>
                  <span>체크아웃</span>
                  <IoIosArrowDown />
                </CagtegoryButton>
              </CategoryContainer>
            </FilterWrap>

            <ResetButton>
              <GrPowerReset />
            </ResetButton>
          </FilterTop>
          {/* <FilterBottom>
            <CagtegoryButton>
              <span>가격</span>
              <IoIosArrowDown />
            </CagtegoryButton>
            <CagtegoryButton>
              <span>스테이 유형</span>
              <IoIosArrowDown />
            </CagtegoryButton>
            <CagtegoryButton>
              <span>테마</span>
              <IoIosArrowDown />
            </CagtegoryButton>
          </FilterBottom> */}
        </div>

        <DestinationModal />
      </div>
    </Container>
  );
}
