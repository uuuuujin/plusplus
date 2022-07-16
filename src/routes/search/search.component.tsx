import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { calendarAction } from '../../store/modules/calendar/calendar.slice';
import { searchAction } from '../../store/modules/search/search.slice';
import { selectSearchRegionName } from '../../store/modules/search/search.select';
import {
  selectCalendarReducerSetCheckIn,
  selectCalendarReducerCheckOut,
} from '../../store/modules/calendar/calendar.select';
import { IoIosArrowDown } from 'react-icons/io';
import { GrPowerReset, GrFilter } from 'react-icons/gr';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import DestinationModal from '../../components/destination-modal/destinationModal.component';
import FilterModal from '../../components/filter-modal/filterModal.component';
import CalendarModal from '../../components/calendar-modal/calendarModal.component';

import ProductListItem from '../../components/product-list-item/productListItem.component';

import {
  Wrapper,
  FilterTop,
  RowContainer,
  CategoryContainer,
  CategoryTitle,
  CagtegoryButton,
  IconButtonContainer,
  IconButton,
  ProductListContainer,
} from './search.style';

export default function Search(): JSX.Element {
  const dispatch = useAppDispatch();
  const searchRegionName = useAppSelector(selectSearchRegionName);
  const checkInDate = useAppSelector(selectCalendarReducerSetCheckIn);
  const checkOutDate = useAppSelector(selectCalendarReducerCheckOut);

  const handleDestinationModal = () => {
    dispatch(modalAction.radioDestinationModal());
  };

  const handleFilterModal = () => {
    dispatch(modalAction.radioFilterModal());
  };

  const handleCalendarModal = () => {
    dispatch(modalAction.setCalendarModal());
  };

  const resetFilter = () => {
    dispatch(searchAction.setSearchRegionName(''));
    dispatch(calendarAction.setCheckInDate(undefined));
    dispatch(calendarAction.setCheckOutDate(undefined));
  };

  const hotelData = [
    {
      productImageSrc: 'productImage1.jpg',
      productTitle: '서우주',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 7,
    },
    {
      productImageSrc: 'productImage2.jpg',
      productTitle: '밤편지',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 25,
    },
    {
      productImageSrc: 'productImage2.jpg',
      productTitle: '서우주',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 57,
    },
    {
      productImageSrc: 'productImage1.jpg',
      productTitle: '밤편지',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 89,
    },
    {
      productImageSrc: 'productImage1.jpg',
      productTitle: '서우주',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 200,
    },
    {
      productImageSrc: 'productImage2.jpg',
      productTitle: '밤편지',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 67,
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Header />
        <FilterTop>
          <RowContainer>
            <CategoryContainer>
              <CategoryTitle>여행지</CategoryTitle>
              <CagtegoryButton
                className="regionName"
                onClick={handleDestinationModal}
              >
                <span>{searchRegionName ? searchRegionName : '여행지'}</span>
                <IoIosArrowDown />
              </CagtegoryButton>
            </CategoryContainer>

            <IconButtonContainer className="mobile">
              <IconButton onClick={resetFilter}>
                <GrPowerReset />
              </IconButton>
              <IconButton onClick={handleFilterModal}>
                <GrFilter />
              </IconButton>
            </IconButtonContainer>
          </RowContainer>

          <RowContainer>
            <CategoryContainer>
              <CategoryTitle>체크인</CategoryTitle>
              <CagtegoryButton onClick={handleCalendarModal}>
                <span>
                  {checkInDate
                    ? `${checkInDate[0]}-${checkInDate[1]}-${checkInDate[2]}`
                    : '체크인'}
                </span>
                <IoIosArrowDown />
              </CagtegoryButton>
            </CategoryContainer>
            <CategoryContainer className="checkout">
              <CategoryTitle>체크아웃</CategoryTitle>
              <CagtegoryButton onClick={handleCalendarModal}>
                <span>
                  {checkOutDate
                    ? `${checkOutDate[0]}-${checkOutDate[1]}-${checkOutDate[2]}`
                    : '체크아웃'}
                </span>
                <IoIosArrowDown />
              </CagtegoryButton>
            </CategoryContainer>
          </RowContainer>

          <IconButtonContainer className="desktop">
            <IconButton onClick={resetFilter}>
              <GrPowerReset />
            </IconButton>
            <IconButton onClick={handleFilterModal}>
              <GrFilter />
            </IconButton>
          </IconButtonContainer>
        </FilterTop>

        <ProductListContainer>
          {hotelData.map((item, key) => [
            <ProductListItem
              key={key}
              productImageSrc={item.productImageSrc}
              productTitle={item.productTitle}
              productCost={item.productCost}
              likeCount={item.likeCount}
            />,
          ])}
        </ProductListContainer>
        <Footer />

        <DestinationModal />
        <FilterModal />
        <CalendarModal />
      </Wrapper>
    </Container>
  );
}
