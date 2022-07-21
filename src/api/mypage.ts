import axios from 'axios';

export interface userData {
  id: number;
  oauthId: string;
  email: string;
  userLevel: number;
  profile: string;
  age: number;
  oauthName: string;
  phoneNumber: string;
  sex: string;
  firstSign: number;
  nickName: string;
}

export const InitialData: userData = {
  id: 0,
  oauthId: '',
  email: '',
  userLevel: 0,
  profile: '',
  age: 0,
  oauthName: '',
  phoneNumber: '',
  sex: '',
  firstSign: 0,
  nickName: '',
};

export interface userDetail {
  firstsign: number;
  nickName: string;
  sex: string;
  phoneNumber: string;
  age: number;
}

export const getUser = async (token: string) => {
  console.log(token);
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users/info`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getUserLike = async (userId: number) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/likes/user/${userId}`
  );
  return response.data;
};

/**
 *
 * @param userData 유저데이터
 * @param token 토큰
 */
export const postUser = async (userData: userDetail, token: string) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_API_URL}/users`,
      {
        firstsign: userData.firstsign,
        nickName: userData.nickName,
        sex: userData.sex,
        age: userData.age,
        phoneNumber: userData.phoneNumber,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
