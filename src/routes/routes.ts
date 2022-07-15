import Home from './home/home.component';
import Description from './description/description.component';
import Search from './search/search.component';
import Listing from './listing/listing.component';
import MyPage from './mypage/mypage.component';
<<<<<<< HEAD
import Admin from './admin-page/admin-page.component';
import UserList from '../components/user-list/user-list.component';
import RoomList from '../components/room-list/room-list.component';
import BookingList from '../components/admin-booking-list/admin-booking-list.component';
=======
import LoginPage from './login/login.component';
import AdminPage from './admin-page/admin-page.component';
>>>>>>> 1af99e27c8b0185b0d5e13b6a998afea12dc07a1

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
  LOGIN: {
    path: '/login',
    link: '/login',
    component: LoginPage,

<<<<<<< HEAD
  ADMIN: {
    path: '/admin',
    link: '/admin',
    component: Admin,
  },

  USERLIST: {
    path: '/admin/user-list',
    link: '/admin/user-list',
    component: UserList,
  },

  ROOMLIST: {
    path: '/admin/room-list',
    link: '/admin/room-list',
    component: RoomList,
  },

  BOOKINGLIST: {
    path: '/admin/booking-list',
    link: '/admin/booking-list',
    component: BookingList,
=======
    ADMINPAGE: {
      path: '/adminpage',
      link: '/adminpage',
      component: AdminPage,
    },
>>>>>>> 1af99e27c8b0185b0d5e13b6a998afea12dc07a1
  },
};
