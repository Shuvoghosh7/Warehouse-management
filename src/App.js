import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Share/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Register from './component/Auth/Register/Register';
import Login from './component/Auth/Login/Login';
import RequireAuth from './component/Auth/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import ManageInventory from './component/MangeInventory/ManageInventory';
import AddItem from './component/AddItem/AddItem';
import Footer from './component/Share/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import Blog from './component/Blog/Blog';
import MyItem from './component/MyItem/MyItem';
import Itemupdate from './component/Itemupdate/Itemupdate';



function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory/>
          </RequireAuth>
        }/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <Inventory/>
          </RequireAuth>
        }/>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem/>
          </RequireAuth>
        }/>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem/>
          </RequireAuth>
        }/>
        <Route path='/itemupdate/:itemId' element={
          <RequireAuth>
            <Itemupdate/>
          </RequireAuth>
        }/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer/>
      <Footer/>
    </div>
  );
}

export default App;
