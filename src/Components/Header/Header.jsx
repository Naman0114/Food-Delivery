import { assets } from '../../assets/Image/assets/assets';
import './Header.css';
const Header=()=>{
    return <>
    <div className="header">
        <div className="h-contents">
            <img src={assets.header}  alt=''/>
            <h2 className='header-heading'>Order your favourite food here</h2>
            <p>Choose from a diverse a delectable array of dishes crafted with the finest ingredients and culinary expertise.</p>
            <button>View Menu</button>
        </div>
    </div>
    </>

}
export default Header;