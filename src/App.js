import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Share/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home/Home';
import Inventory from './component/Inventory/Inventory';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inventory/:inventoryId' element={<Inventory/>}/>
      </Routes>
    </div>
  );
}

export default App;
