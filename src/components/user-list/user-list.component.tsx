import {
  HeaderText,
  User,
  UserDetail,
  UsersContainer,
} from './user-list.style';

const userData = [
  {
    gender: 'female',
    phoneNumber: '01012341234',
    age: 10,
  },
  {
    gender: 'male',
    phoneNumber: '01043211234',
    age: 15,
  },
  {
    gender: 'male',
    phoneNumber: '01066661234',
    age: 12,
  },
  {
    gender: 'female',
    phoneNumber: '01012341254',
    age: 30,
  },
];
interface UserDetailProp {
  gender: string;
  phoneNumber: string;
  age: number;
}

export default function UserList(props: UserDetailProp): JSX.Element {
  const { gender, phoneNumber, age } = props;
  return (
    <div>
      <HeaderText>유저 리스트</HeaderText>
      <UsersContainer>
        <User>
          {/* {userData.map((item, key) => {
            return <UserDetail key={key} gender={item.gender}></UserDetail>;
          })} */}
        </User>
      </UsersContainer>
    </div>
  );
}
