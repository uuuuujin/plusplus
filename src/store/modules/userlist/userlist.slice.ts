import { fetchUser } from './../../../api/user';
import { createSlice } from '@reduxjs/toolkit';

interface User {
  nickname: string;
  userImageURL: string;
  age: number;
  email: string;
  gender: string;
}

interface UserInformation {
  user: User;
}

const initialState: UserInformation = {
  user: {
    nickname: '',
    userImageURL: '',
    age: 0,
    email: '',
    gender: '',
  },
};
export const userlistSlice = createSlice({
  name: 'userlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = {
        userImageURL: action.payload.userImageURL,
        nickname: action.payload.nickname,
        age: action.payload.age,
        email: action.payload.email,
        gender: action.payload.gender,
      };
    });
  },
});

export const userlistAction = userlistSlice.actions;
export default userlistSlice.reducer;
