import { useDispatch, useSelector } from 'react-redux';
import { updateToken } from '../store/token/tokenSlice';

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  if (token) {
    setToken(token);
    return token;
  }
  if (localStorage.getItem('token')) {
    dispatch(updateToken(localStorage.getItem('token')));
    return localStorage.getItem('token');
  }
};
