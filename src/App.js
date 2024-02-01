import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import { Routes,Route } from 'react-router-dom';
import Search from './Search/Search';

function App() {
  return (
    <div >

    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<LandingPage />} />
      
    </Routes>
   
    </div>
  );
}

export default App;
