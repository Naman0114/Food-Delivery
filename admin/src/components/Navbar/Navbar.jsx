import { assets } from '../../assets/asset';
import './Navbar.css';

const Navbar=()=>{
    return <>
    <div className='navbar'>
        <img className="logo" src={assets.adminProfile} alt="" />
        <img className="profile" src={assets.logo} alt="" />
    </div>
    
    </>
}
export default Navbar;