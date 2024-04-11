import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authRequest } from './store/auth/authSlice';
import { getToken } from './hooks/token';
import { exchangeRequest } from './store/exchange/exchangeSlice';

// в стиля есть visually-hidden  для скрытия контента

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getToken();
  useEffect(() => {
    if (token) {
      dispatch(authRequest(token));
      dispatch(exchangeRequest());
      navigate('/currencies');
    }
    if (!token) {
      navigate('/auth');
    }
  }, []);
  console.log();
  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
          <Footer />
        </>
      } />
    </Routes>
  );
};

export default App;
