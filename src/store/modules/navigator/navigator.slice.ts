import { createSlice } from '@reduxjs/toolkit';

export interface NavigatorState {
  currentPage: string;
}

const initialState: NavigatorState = {
  currentPage: 'home',
};

export const navigatorSlice = createSlice({
  name: 'navigator',
  initialState,
  reducers: {
    setCurrnetPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const navigatorAction = navigatorSlice.actions;
export default navigatorSlice.reducer;
