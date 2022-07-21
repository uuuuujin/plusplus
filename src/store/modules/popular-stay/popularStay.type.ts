export interface StayBaseType {
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

export interface PopularStayType {
  stay: StayBaseType[];
}
