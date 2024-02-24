import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<WishList />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} /> 
      </Routes>
  );
}

export default App;