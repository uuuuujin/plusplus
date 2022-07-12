import Home from './home/home.component';
import Description from './description/description.component';
import Search from './search/search.component';
import Listing from './listing/listing.component';
import MyPage from './mypage/mypage.component';

export const ROUTES = {
  HOME: {
    path: '/',
    link: '/',
    component: Home,
  },
  SEARCH: {
    path: '/search',
    link: '/search',
    component: Search,
  },
  DESCRIPTION: {
    path: '/description',
    link: '/description',
    component: Description,
  },
  LISTING: {
    path: '/listing',
    link: '/listing',
    component: Listing,
  },
  MYPAGE: {
    path: '/mypage',
    link: '/mypage',
    component: MyPage,
  },
};