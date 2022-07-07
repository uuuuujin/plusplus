import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
  searchRegionName: string;
}

const initialState: SearchState = {
  searchRegionName: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchRegionName: (state, action) => {
      state.searchRegionName = action.payload;
    },
  },
});

export const searchAction = searchSlice.actions;
export default searchSlice.reducer;
