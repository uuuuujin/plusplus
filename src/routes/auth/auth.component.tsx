import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index.hook';
import { userAction } from '../../store/modules/user/user.slice';

export default function Auth(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const params = new URL(document.URL).searchParams;
    const data = {
      accessToken: params.get('accessToken') || '',
      refreshToken: params.get('refreshToken') || '',
    };

    dispatch(userAction.logIn(data));

    // const getUserInfo = async (token: string) => {
    //   const response = await axios.get('http://localhost:5050/users', {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });

    //   console.log(response.data);
    // };

    // getUserInfo(data.accessToken);

    navigate('/');
  }, [navigate, dispatch, location]);

  return <div></div>;
}
