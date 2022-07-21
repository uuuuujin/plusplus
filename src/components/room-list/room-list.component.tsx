import ProductListItem from '../product-list-item/productListItem.component';

import {
  Filter,
  Filters,
  FilterContainer,
  FilterText,
  CheckboxElement,
  CheckboxInput,
  CheckboxLabel,
  CheckboxContainer,
  HeaderText,
  ProductListContainer,
} from './room-list.style';

interface FilterType {
  title: string;
  id: string;
}
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

const REGION_TYPE: FilterType[] = [
  {
    title: '서울',
    id: 'seoul',
  },
  {
    title: '경기',
    id: 'gyeonggi',
  },
  {
    title: '인천',
    id: 'inc',
  },
  {
    title: '강원',
    id: 'gang',
  },
  {
    title: '대전',
    id: 'dae',
  },
  {
    title: '충청',
    id: 'chung',
  },
];

const hotelData = [
  {
    id: 1,
    productImageSrc: '../productImage1.jpg',
    productTitle: '살려줘',
    productRegion: '서울',
    productStayType: '민박',
    minPrice: 200000,
    maxPrice: 300000,
    event_id: {
      id: 0,
      name: '여름 바캉스 이벤트',
      start_date: '2022-07-13',
      end_date: '2022-08-05',
      rate: 30,
    },
  },
  {
    id: 1,
    productImageSrc: '../productImage2.jpg',
    productTitle: '주말반납',
    productRegion: '서울',
    productStayType: '민박',
    minPrice: 200000,
    maxPrice: 300000,
    event_id: {
      id: 0,
      name: '여름 바캉스 이벤트',
      start_date: '2022-07-13',
      end_date: '2022-08-05',
      rate: 30,
    },
  },
  {
    id: 1,
    productImageSrc: '../productImage2.jpg',
    productTitle: '코딩좋아',
    productRegion: '서울',
    productStayType: '민박',
    minPrice: 200000,
    maxPrice: 300000,
    event_id: {
      id: 0,
      name: '여름 바캉스 이벤트',
      start_date: '2022-07-13',
      end_date: '2022-08-05',
      rate: 30,
    },
  },
  {
    id: 1,
    productImageSrc: '../productImage1.jpg',
    productTitle: '즐거운 리액트',
    productRegion: '서울',
    productStayType: '민박',
    minPrice: 200000,
    maxPrice: 300000,
    event_id: {
      id: 0,
      name: '여름 바캉스 이벤트',
      start_date: '2022-07-13',
      end_date: '2022-08-05',
      rate: 30,
    },
  },
  {
    id: 1,
    productImageSrc: '../productImage1.jpg',
    productTitle: '살려줘',
    productRegion: '서울',
    productStayType: '민박',
    minPrice: 200000,
    maxPrice: 300000,
    event_id: {
      id: 0,
      name: '여름 바캉스 이벤트',
      start_date: '2022-07-13',
      end_date: '2022-08-05',
      rate: 30,
    },
  },
  {
    id: 1,
    productImageSrc: '../productImage2.jpg',
    productTitle: '주말반납',
    productRegion: '서울',
    productStayType: '민박',
    minPrice: 200000,
    maxPrice: 300000,
    event_id: {
      id: 0,
      name: '여름 바캉스 이벤트',
      start_date: '2022-07-13',
      end_date: '2022-08-05',
      rate: 30,
    },
  },
  {
    id: 1,
    productImageSrc: '../productImage2.jpg',
    productTitle: '코딩좋아',
    productRegion: '서울',
    productStayType: '민박',
    minPrice: 200000,
    maxPrice: 300000,
    event_id: {
      id: 0,
      name: '여름 바캉스 이벤트',
      start_date: '2022-07-13',
      end_date: '2022-08-05',
      rate: 30,
    },
  },
  {
    id: 1,
    productImageSrc: '../productImage1.jpg',
    productTitle: '즐거운 리액트',
    productRegion: '서울',
    productStayType: '민박',
    minPrice: 200000,
    maxPrice: 300000,
    event_id: {
      id: 0,
      name: '여름 바캉스 이벤트',
      start_date: '2022-07-13',
      end_date: '2022-08-05',
      rate: 30,
    },
  },
];
export default function RoomList(): JSX.Element {
  return (
    <div>
      <HeaderText>숙소 리스트</HeaderText>
      <Filters>
        <Filter>
          <FilterText>여행지</FilterText>
          <FilterContainer>
            {REGION_TYPE.map((item, key) => {
              return (
                <CheckboxElement key={key}>
                  <CheckboxContainer>
                    <CheckboxInput type="checkbox" id={item.id} />
                    <CheckboxLabel htmlFor={item.id}>
                      {item.title}
                    </CheckboxLabel>
                  </CheckboxContainer>
                </CheckboxElement>
              );
            })}
          </FilterContainer>
        </Filter>
        <Filter>
          <FilterText>테마</FilterText>
          <FilterContainer>
            {THEME_TYPE.map((item, key) => {
              return (
                <CheckboxElement key={key}>
                  <CheckboxContainer>
                    <CheckboxInput type="checkbox" id={item.id} />
                    <CheckboxLabel htmlFor={item.id}>
                      {item.title}
                    </CheckboxLabel>
                  </CheckboxContainer>
                </CheckboxElement>
              );
            })}
          </FilterContainer>
        </Filter>
        <Filter>
          <FilterText>스테이 유형</FilterText>
          <FilterContainer>
            {STAY_TYPE.map((item, key) => {
              return (
                <CheckboxElement key={key}>
                  <CheckboxContainer>
                    <CheckboxInput type="checkbox" id={item.id} />
                    <CheckboxLabel htmlFor={item.id}>
                      {item.title}
                    </CheckboxLabel>
                  </CheckboxContainer>
                </CheckboxElement>
              );
            })}
          </FilterContainer>
        </Filter>
      </Filters>

      <ProductListContainer>
        {hotelData.map((item, key) => [
          <ProductListItem
            key={key}
            stayId={item.id}
            stayImageSrc={item.productImageSrc}
            stayTitle={item.productTitle}
            minPrice={item.minPrice}
            maxPrice={item.maxPrice}
            stayRegion={item.productRegion}
            StayType={item.productStayType}
            event={item.event_id}
          />,
        ])}
      </ProductListContainer>
    </div>
  );
}
