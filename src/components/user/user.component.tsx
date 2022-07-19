import {
  UserAge,
  UserContainer,
  UserDetail,
  UserEmail,
  UserImg,
  UserNickname,
  UserSex,
} from './user.style';

export interface UserDetailProp {
  sex: string;
  nickname: string;
  age: number;
  email: string;
  imageSrc: string;
}

export default function User(props: UserDetailProp): JSX.Element {
  const { sex, nickname, age, email, imageSrc } = props;
  return (
    <UserContainer>
      <UserImg src={imageSrc} />
      <UserDetail>
        <UserNickname>{nickname}</UserNickname>
        <UserSex>{sex}</UserSex>
        <UserAge>{age}</UserAge>
        <UserEmail>{email}</UserEmail>
      </UserDetail>
    </UserContainer>
  );
}
