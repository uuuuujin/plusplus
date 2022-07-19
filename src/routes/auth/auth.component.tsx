import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index.hook';
import { userAction } from '../../store/modules/user/user.slice';

export default function Auth(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    const params = new URL(document.URL).searchParams;
    console.log(params.get('accessToken'));
    console.log(params.get('refreshToken'));
    const data = {
      accessToken: params.get('accessToken') || '',
      refreshToken: params.get('refreshToken') || '',
    };

    dispatch(userAction.logIn(data));
    navigate('/');
  }, [navigate, dispatch, location]);

  return <div></div>;
}
