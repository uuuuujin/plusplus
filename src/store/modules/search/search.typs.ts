export interface IndexNameType {
  id: number;
  name: string;
}

interface CategoryType extends IndexNameType {
  classification: string;
}

export interface SearchResultType {
  count: number;
  stations: [
    {
      id: number;
      name: string;
      image: string;
      content: string;
      minprice: number;
      maxprice: number;
      local_id: {
        id: number;
        name: string;
        classification: string;
      };
      stay_id: {
        id: number;
        name: string;
        classification: string;
      };
      theme: [
        {
          id: number;
          name: string;
        }
      ];
      event_id: {
        id: number;
        name: string;
        start_date: string;
        end_date: string;
        rate: number;
      };
      likes: [
        {
          id: number;
          station_id: number;
          user_id: number;
        }
      ];
      likesCount: number;
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
