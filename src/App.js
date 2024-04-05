import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
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
