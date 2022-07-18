import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  accessToken: '',
  refreshToken: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.accessToken = action.payload;
      state.refreshToken = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.accessToken = '';
      state.refreshToken = '';
      state.isLoggedIn = false;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
