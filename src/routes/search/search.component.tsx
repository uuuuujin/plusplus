import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { selectSearchRegionName } from '../../store/modules/search/search.select';
import { IoIosArrowDown } from 'react-icons/io';
import { GrPowerReset, GrFilter } from 'react-icons/gr';
import Container from '../../components/container/container.component';
import DestinationModal from '../../components/destination-modal/destinationModal.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import FilterModal from '../../components/filter-modal/filterModal.component';
import ProductListItem from '../../components/product-list-item/productListItem.component';

import {
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
  const handleDestinationModal = () => {
    dispatch(modalAction.radioDestinationModal());
  };
  const searchRegionName = useAppSelector(selectSearchRegionName);

  const handleFilterModal = () => {
    dispatch(modalAction.radioFilterModal());
  };

  const hotelData = [
    {
      productImageSrc: 'productImage1.jpg',
      productTitle: '서우주',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 50,
    },
    {
      productImageSrc: 'productImage2.jpg',
      productTitle: '밤편지',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 100,
    },
    {
      productImageSrc: 'productImage2.jpg',
      productTitle: '서우주',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 50,
    },
    {
      productImageSrc: 'productImage1.jpg',
      productTitle: '밤편지',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 100,
    },
    {
      productImageSrc: 'productImage1.jpg',
      productTitle: '서우주',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 50,
    },
    {
      productImageSrc: 'productImage2.jpg',
      productTitle: '밤편지',
      productCost: '₩200,000 ~ ₩300,000',
      likeCount: 100,
    },
  ];

  return (
    <Container>
      <div>
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
              <IconButton>
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
              <CagtegoryButton>
                <span>체크인</span>
                <IoIosArrowDown />
              </CagtegoryButton>
            </CategoryContainer>
            <CategoryContainer className="checkout">
              <CategoryTitle>체크아웃</CategoryTitle>
              <CagtegoryButton>
                <span>체크아웃</span>
                <IoIosArrowDown />
              </CagtegoryButton>
            </CategoryContainer>
          </RowContainer>

          <IconButtonContainer className="desktop">
            <IconButton>
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
      </div>
    </Container>
  );
}
