import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkRequest } from '../store/checkUser/checkSlice';

export const useCheckUser = (id) => {
  const check = useSelector(state => state.check.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkRequest(id));
  }, [id]);

  return check;
};
