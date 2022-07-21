import { UserDetailProp } from '../user/user.component';
import axios from 'axios';
import {
  Age,
  DetailCategory,
  DetailWrapper,
  Email,
  FillerDiv,
  HeaderText,
  Nickname,
  Sex,
  UsersContainer,
} from './user-list.style';
import User from '../user/user.component';
import { useAppDispatch, useAppSelector } from '../../hooks/index.hook';
import {
  selectUserlistReducer,
  selectUserResult,
} from '../../store/modules/userlist/userlist.select';
import { useState, useEffect } from 'react';
import { userlistAction } from '../../store/modules/userlist/userlist.slice';
import { fetchUser } from '../../api/user';
import { selectAccessToken } from '../../store/modules/user/user.select';

export default function UserList(): JSX.Element {
  // const userlistResult = useAppSelector(selectUserResult);
  const [userData, setUserData] = useState<any[]>([]);
  const token = useAppSelector(selectAccessToken);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(token);
    const getUser = async () => {
      // await dispatch(fetchUser(token));
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUserData(response.data);
    };
    if (token) {
      getUser();
      // console.log(userData.data);
    }
  }, [token]);
  // const token = useAppSelector(selectAccessToken);
  // const userlistResult: any = [];

  // const userProps = {
  //   imageSrc: String,
  //   sex: String,
  //   nickname: String,
  //   age: Number,
  //   email: String,
  // };
  // useEffect(() => {
  //   const data = async () => {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/users`,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     return response.data;
  //   };
  //   const temp = data();
  //   temp.then((res) => {
  //     console.log(res);
  //     res.data.map((user, key) => {
  //       console.log(user.email);
  //     });
  //   });
  // }, []);

  // console.log(userlistResult);
  return (
    <div>
      <HeaderText>유저 리스트</HeaderText>
      <DetailCategory>
        <FillerDiv />
        <DetailWrapper>
          <Nickname>닉네임</Nickname>
          <Sex>성별</Sex>
          <Age>나이</Age>
          <Email>이메일</Email>
        </DetailWrapper>
      </DetailCategory>
      <UsersContainer>
        {/* {userData.map((item, key) => {
          return (
            <User
              key={key}
              imageSrc={item.imageSrc}
              sex={item.sex}
              nickname={item.nickname}
              age={item.age}
              email={item.email}
            />
          );
        })} */}
      </UsersContainer>
    </div>
  );
}
