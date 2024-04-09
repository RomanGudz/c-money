import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authRequest } from '../store/auth/authSlice';
import { getToken } from './token';

export const useAuth = () => {
  const loading = useSelector(state => state.auth.loading);
  const auth = useSelector(state => state.auth.data);
  const token = getToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequest(token));
    navigate('/currencies');
    if (!token) {
      navigate('/auth');
    }
  }, []);

  return [auth, loading];
};
