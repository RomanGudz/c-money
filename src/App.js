import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useAuth } from './hooks/useAuth';

// в стиля есть visually-hidden  для скрытия контента

const App = () => {
  useAuth();
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
