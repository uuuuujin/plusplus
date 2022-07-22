import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { fetchUserInfo } from '../../../api/user';

export interface UserState {
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
  userId: number;
}

const initialState: UserState = {
  accessToken: '',
  refreshToken: '',
  isLoggedIn: false,
  userId: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.accessToken = '';
      state.refreshToken = '';
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PURGE, () => initialState)
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.userId = action.payload.user.id;
      });
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
