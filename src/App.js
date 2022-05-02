import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Share/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Register from './component/Auth/Register/Register';
import Login from './component/Auth/Login/Login';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inventory/:inventoryId' element={<Inventory/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
