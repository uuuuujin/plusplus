import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Search from './routes/search/search.component';
import Listing from './routes/listing/listing.component';
import MyPage from './routes/mypage/mypage.component';
import Admin from './routes/admin-page/admin-page.component';
import AdminBookingList from './components/admin-booking-list/admin-booking-list.component';
import RoomList from './components/room-list/room-list.component';

// description page
import Description from './routes/description/description.component';

import './App.css';
import UserList from './components/user-list/user-list.component';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/listing" element={<Listing />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/admin/room-list" element={<RoomList />}></Route>
      <Route path="/admin/booking-list" element={<AdminBookingList />}></Route>
      <Route path="/admin/user-list" element={<UserList />}></Route>
      <Route path="/description" element={<Description />}></Route>
    </Routes>
  );
}

export default App;
