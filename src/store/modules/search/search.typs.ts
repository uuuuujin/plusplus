import { StayBaseType } from '../popular-stay/popularStay.type';

export interface IndexNameType {
  id: number;
  name: string;
}

interface CategoryType extends IndexNameType {
  classification: string;
}

export interface SearchResultType {
  count: number;
  stations: StayBaseType[];
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
