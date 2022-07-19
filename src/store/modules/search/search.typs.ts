export interface IndexNameType {
  id: number;
  name: string;
}

interface CategoryType extends IndexNameType {
  classification: string;
}

interface SearchResultType {
  count: number;
  stations: [
    {
      station_id: number;
      station_name: string;
      station_image: string;
      station_content: string;
      station_minprice: number;
      station_maxprice: number;
      local_name: string;
      stay_name: string;
      like_cnt: number;
    }
  ];
}

export interface SearchStateType {
  local: CategoryType[];
  stayType: CategoryType[];
  theme: IndexNameType[];
  searchRegion: IndexNameType;
  searchCostRange: number[];
  searchStayType: number[];
  searchTheme: number[];
  searchResult: SearchResultType;
}
