import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar";
import LoginPopup from './LoginPopup/LoginPopup';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      < Route path='/' element={<Home/>}/>
      < Route path='/cart' element={<Cart/>}/>
      < Route path='/order' element={<PlaceOrder/>}/>
    </Routes>
    <Footer/>

    </>
  )
}
export default App;
