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
        userImageURL: action.payload.data.userImageURL,
        nickname: action.payload.data.nickname,
        age: action.payload.data.age,
        email: action.payload.data.email,
        gender: action.payload.data.gender,
      };
    });
  },
});

export const userlistAction = userlistSlice.actions;
export default userlistSlice.reducer;
