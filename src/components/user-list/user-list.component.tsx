import { UserDetailProp } from '../user/user.component';
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

const userData: UserDetailProp[] = [
  {
    sex: 'male',
    nickname: 'testname',
    age: 10,
    email: 'test1@gmail.com',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/3577/3577349.png',
  },
  {
    sex: 'female',
    nickname: 'testname',
    age: 20,
    email: 'test2@gmail.com',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/3577/3577349.png',
  },
  {
    sex: 'male',
    nickname: 'testname',
    age: 20,
    email: 'test3@gmail.com',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/3577/3577349.png',
  },
  {
    sex: 'female',
    nickname: 'testname',
    age: 30,
    email: 'test4@gmail.com',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/3577/3577349.png',
  },
];

export default function UserList(): JSX.Element {
  const userlistResult = useAppSelector(selectUserResult);
  console.log(userlistResult);

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
        {/* {userlistResult.map((item, key) => {
          
        })} */}
      </UsersContainer>
    </div>
  );
}

// {/* {userData.map((item, key) => {
//   return <UserDetail key={key} gender={item.gender}></UserDetail>;
// })} */}
