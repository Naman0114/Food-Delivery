import { Link } from 'react-router-dom';
import { assets } from '../../assets/Image/assets/assets';
import './Footer.css';
const Footer=()=>{
    return <>
    <div className='footer' id="footer">
        <div className="f-content">
            <div className="f-c-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi laborum repellendus dolorem, vitae quisquam esse reiciendis ipsam non aperiam?</p>
                <div className='f-social-icons'>
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className="f-c-center">
                <h2>COMPANY</h2>
                <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to='#about'>About us</Link></li>
                   <li><Link to='/order'>Delivery</Link></li>
                  <li><Link>Privacy Policy</Link></li>
                </ul>

            </div>
            <div className="f-c-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>0584653648</li>
                    <li>contact@food.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='f-copyright'>Copyright 2024 @ Food.com - All Right Reserved.</p>
    </div>

    </>

}
export default Footer;