import { useContext, useState } from "react";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/Image/assets/assets";
import { FoodContext } from "../../Context";
import './Navbar.css';

const Navbar = ({setShowLogin}) => {

    const[menu,setMenu]=useState("home");
    const {token,setToken}=useContext(FoodContext);
    const navigate=useNavigate();
    const logOut=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");

    }
    return (
        <>
            <div className="main">
                <Link to="/"><img src={assets.logo} alt=" image not found" className="pic1" /></Link>
                <ul className="list">
                    <Link to='/' onClick={()=>setMenu("home")} className={menu==="home" ?"active":""}>Home</Link>
                    <a  href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu" ? "active":""}>Menu</a>
                    <a  href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active":""}>Mobile App</a>
                    <a  href='#footer' onClick={()=>setMenu("about")} className={menu==="about" ? "active":""}>About Us</a>
                </ul>
                <div className='list2'>
                    <CiSearch className="pic2"/>
                    < Link to="/cart" ><CiShoppingBasket className="pic3"/></Link>
                    {!token?<button className='btn1' onClick={()=>setShowLogin(true)}>Sign in</button>:
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt=""/>
                        <ul className="navbar-profile-dropdown">
                            <li onClick={()=>navigate('/myOrders')}><img src={assets.bag_icon}/><p>Orders</p></li>
                            <hr/>
                            <li onClick={logOut}><img src={assets.logout_icon}/>Logout</li>
                        </ul>
                        </div>
                        }                                 
                </div>
            </div>
        </>
    )
}
export default Navbar;