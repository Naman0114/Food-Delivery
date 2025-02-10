import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../../Context";
import './PlaceOrder.css';


const PlaceOrder = () => {
    const { getTotalPrice ,token,food_list,cartItems,url} = useContext(FoodContext);
    const navigate=useNavigate();

    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:"",
    });

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}));
    }


    const onSubmitHandler=async(event)=>{
        event.preventDefault();

        
        let orderItems=[];
        food_list.map((item)=>{
            if(cartItems[item.id]>0){
                let itemInfo=item;
                itemInfo["quantity"]=cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })
        let orderData={
            address:data,
            items:orderItems,
            amount:getTotalPrice()+2,
        }
        await axios.post(url+"/api/order/place",orderData,{header:{token}});


        navigate("/myOrders");
    }
    
    
    useEffect(()=>{
        if(!token){
            navigate('/cart');

        }
        else if(getTotalPrice()===0){
            navigate('/cart');
        }
    },[token]);

    return <>
            <div className="place-order-title">
                <h4>Delivery Information</h4>
            </div>
            <form className="place-order" onSubmit={onSubmitHandler}>
                <div className="place-order-info">
                    <div className="multi-fields">
                    <input type="text" required name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder="First name"></input>
                    <input type="text" required name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder="Last name"></input>
                    </div>
                    <input type="email" required name="email" onChange={onChangeHandler} value={data.email} placeholder="Email address"></input>
                    <input type="text"  required placeholder="Street" name="street" onChange={onChangeHandler} value={data.street}></input>
                    <div  className="multi-fields">
                    <input type="text" required name="state" onChange={onChangeHandler} value={data.state}placeholder="State "></input>
                    <input type="text" required name="city" onChange={onChangeHandler} value={data.city} placeholder="City"></input>
                    </div>
                    <div  className="multi-fields">
                    <input type="text" required name="zipcode" onChange={onChangeHandler} value={data.zipcode} placeholder="Zip Code"></input>
                    <input type="text" required name="country" onChange={onChangeHandler} value={data.country} placeholder="Country"></input>
                    </div>
                    <input type="text" required name="phone" onChange={onChangeHandler} value={data.phone} placeholder="Phone"></input>
                </div>
            <div className="place-order-right">
                <div className="cart-bottom">
                    <div className="cart-total">
                        <h2>Cart Totals</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>{getTotalPrice()}</p>

                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery</p>
                                <p>{getTotalPrice() === 0 ? 0 : 2}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>{getTotalPrice() === 0 ? 0 : getTotalPrice() + 2}</b>
                            </div>
                        </div>
                        <button type="submit" >PROCEED TO Payment</button>
                    </div>
                </div>
            </div>
        </form>
    </>

}
export default PlaceOrder;