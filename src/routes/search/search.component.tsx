import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectIsDestinationModalOpen } from '../../store/modules/modal/modal.select';
import { selectSearchRegionName } from '../../store/modules/search/search.select';
import { IoIosArrowDown } from 'react-icons/io';
import { GrPowerReset, GrFilter } from 'react-icons/gr';
import Container from '../../components/container/container.component';
import DestinationModal from '../../components/destination-modal/destinationModal.component';
import Header from '../../components/header/header.component';

import {
  FilterTop,
  FilterWrap,
  RowContainer,
  CategoryContainer,
  CategoryTitle,
  CagtegoryButton,
  IconButtonContainer,
  IconButton,
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
        <Header/> 

        <FilterTop>
          <RowContainer>
            <CategoryContainer>
              <CategoryTitle>여행지</CategoryTitle>
              <CagtegoryButton className='regionName' onClick={handleDestinationModal}>
                <span>{searchRegionName ? searchRegionName : '여행지'}</span>
                <IoIosArrowDown />
              </CagtegoryButton>
            </CategoryContainer>
            <IconButtonContainer className='mobile'>
              <IconButton>
                <GrPowerReset />
              </IconButton>
              <IconButton>
                <GrFilter />
              </IconButton>
            </IconButtonContainer>
          </RowContainer>
          <RowContainer>
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
          </RowContainer>

          <IconButtonContainer className='desktop'>
            <IconButton >
              <GrPowerReset />
            </IconButton>
            <IconButton >
              <GrFilter />
            </IconButton>
          </IconButtonContainer>
        </FilterTop>

        <DestinationModal />
      </div>
    </Container>
  );
}
