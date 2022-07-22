import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index.hook';
import { userAction } from '../../store/modules/user/user.slice';
import { fetchUserInfo } from '../../api/user';

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
    dispatch(fetchUserInfo(data.accessToken));

    navigate('/');
  }, [navigate, dispatch, location]);

  return <div></div>;
}
