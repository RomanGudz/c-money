import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const loading = useSelector(state => state.auth.data);
  const auth = useSelector(state => state.auth.loading);
  const token = useSelector(state => state.token.token);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  useEffect(() => {
    navigate('/currencies');
    if (!token) {
      navigate('/auth');
    }
  }, [token]);

  return [auth, loading];
};
