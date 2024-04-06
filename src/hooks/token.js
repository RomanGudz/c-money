import { useSelector } from 'react-redux';

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  const token = useSelector(state => state.token.token);
  if (token) {
    setToken(token);
    return token;
  }
  if (localStorage.getItem('token')) {
    return localStorage.getItem('token');
  }
};
