import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../hooks/index.hook';
import { arrDestruct } from '../utils/arrDestruct';

export const fetchLocal = createAsyncThunk('search/local', async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/categories/local`
  );
  return response.data;
});

export const fetchStayType = createAsyncThunk(
  'search/getStayType',
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/categories/stay`
    );
    return response.data;
  }
);

export const fetchTheme = createAsyncThunk('search/getTheme', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/themes`);

  return response.data;
});

interface SearchPropsType {
  localId?: number | null;
  stayIds?: number[];
  themeIds?: number[];
  minprice?: number;
  maxprice?: number;
}

export const getSearchResult = createAsyncThunk(
  'search/getSearchResult',
  async (props: SearchPropsType) => {
    const { localId, stayIds, themeIds, minprice, maxprice } = props;
    console.log('props: ', props);
    const stayIdArr = arrDestruct(stayIds);
    const themeIdArr = arrDestruct(themeIds);
    console.log(
      'url: ',
      `${process.env.REACT_APP_API_URL}/stations/search?localId=${
        localId === 0 ? '' : localId
      }&stayIds=${stayIdArr}&themeIds=${themeIdArr}&minprice=${minprice}&maxprice=${maxprice}`
    );

    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/stations/search?localId=${
        localId === 0 ? '' : localId
      }&stayIds=${stayIdArr}&themeIds=${themeIdArr}&minprice=${minprice}&maxprice=${maxprice}`
    );

    console.log('response: ', response);

    return response.data;
  }
);
