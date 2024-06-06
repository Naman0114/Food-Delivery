import { useState } from 'react';
import { assets } from '../assets/Image/assets/assets';
import './LoginPopup.css';
const LoginPopup=({setShowLogin})=>{
    const [currState,setCurrState]=useState("Login")
    return<>
    <div className='Login-popUp'>
        <form className='l-p-container'>
            <div className='l-p-title'>
                <h2>{currState}</h2>
                <img  onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt=""/>
            </div>
            <div className='l-p-inputs'>
                {currState==="Login"? <></>:<input className='input-name' type="text" placeholder='Enter name' required/>}
                <input type="email" placeholder='Enter email' required/><br/>
                <input type="password" placeholder=' Enter password' required/>
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="l-p-condition">
                <input type='checkbox' required/>
                <p>By continuing, i agree to the terms of use and privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account ?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
            <p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }

        </form>
        

    </div>
    </>

}
export default LoginPopup;