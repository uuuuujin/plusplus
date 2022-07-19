import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import { modalAction } from '../../store/modules/modal/modal.slice';
import { calendarAction } from '../../store/modules/calendar/calendar.slice';
import { searchAction } from '../../store/modules/search/search.slice';
import { navigatorAction } from '../../store/modules/navigator/navigator.slice';
import {
  selectSearchRegion,
  selectSearchCostRange,
  selectSearchStayType,
  selectSearchTheme,
  selectSearchResult,
} from '../../store/modules/search/search.select';
import {
  selectCalendarReducerSetCheckIn,
  selectCalendarReducerCheckOut,
} from '../../store/modules/calendar/calendar.select';
import { getSearchResult } from '../../api/search';
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
  FilterWrap,
  FilterTop,
  SearchButtonContainer,
  SearchButton,
  RowContainer,
  CategoryContainer,
  CategoryTitle,
  CagtegoryButton,
  IconButtonContainer,
  IconButton,
  ProductListContainer,
} from './search.style';
import { selectIsCalendarModalOpen } from '../../store/modules/modal/modal.select';

export default function Search(): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const isCalendarModalOpen = useAppSelector(selectIsCalendarModalOpen);
  const searchRegionName = useAppSelector(selectSearchRegion);
  const checkInDate = useAppSelector(selectCalendarReducerSetCheckIn);
  const checkOutDate = useAppSelector(selectCalendarReducerCheckOut);
  const searchStayType = useAppSelector(selectSearchStayType);
  const searchTheme = useAppSelector(selectSearchTheme);
  const [minprice, maxprice] = useAppSelector(selectSearchCostRange);
  const searchResult = useAppSelector(selectSearchResult);

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

  useEffect(() => {
    dispatch(navigatorAction.setCurrnetPage(location.pathname.slice(1)));
  }, [dispatch, location]);

  const fetchSearchResult = async () => {
    const data = {
      localId: searchRegionName.id,
      stayIds: searchStayType,
      themeIds: searchTheme,
      minprice: minprice,
      maxprice: maxprice,
    };
    await dispatch(getSearchResult(data));
  };

  const dummyData = [
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
        {/* <Header /> */}
        <FilterWrap>
          <FilterTop>
            <RowContainer>
              <CategoryContainer>
                <CategoryTitle>여행지</CategoryTitle>
                <CagtegoryButton
                  className="regionName"
                  onClick={handleDestinationModal}
                >
                  <span>
                    {searchRegionName.name ? searchRegionName.name : '여행지'}
                  </span>
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
          <SearchButtonContainer>
            <SearchButton onClick={fetchSearchResult}>검색하기</SearchButton>
          </SearchButtonContainer>
        </FilterWrap>

        <ProductListContainer>
          {searchResult.count === 0
            ? '검색 결과가 없습니다.'
            : searchResult.stations.map((item, key) => [
                <ProductListItem
                  key={key}
                  productImageSrc={item.station_image}
                  productTitle={item.station_name}
                  productCost={`₩${item.station_minprice} ~ ₩${item.station_maxprice}`}
                  likeCount={item.like_cnt}
                />,
              ])}
        </ProductListContainer>
        <Footer />

        <DestinationModal />
        <FilterModal />
        {isCalendarModalOpen && <CalendarModal />}
      </Wrapper>
    </Container>
  );
}
