import { fetchUser } from './../../../api/user';
import { createSlice } from '@reduxjs/toolkit';

interface User {
  nickname: string;
  userImageURL: string;
  age: number;
  email: string;
  sex: string;
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
    sex: '',
  },
};
export const userlistSlice = createSlice({
  name: 'userlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = {
        userImageURL: action.payload.data.profile,
        nickname: action.payload.data.nickName,
        age: action.payload.data.age,
        email: action.payload.data.email,
        sex: action.payload.data.sex,
      };
    });
  },
});

export const userlistAction = userlistSlice.actions;
export default userlistSlice.reducer;
