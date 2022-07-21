import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

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
    builder.addCase(PURGE, () => initialState);
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
