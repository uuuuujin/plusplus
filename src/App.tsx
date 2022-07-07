import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Search from './routes/search/search.component';
import MyPage from './routes/mypage/mypage.component';

// description page
import Description from './routes/description/description.component';

import './App.css';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/description" element={<Description />}></Route>
    </Routes>
  );
}

export default App;
