import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { assets } from '../../../../src/assets/Image/assets/assets';
import './Orders.css';


const Orders=({url})=>{

    const [order,setOrders]=useState([]);

    const fetchOrders=async()=>{
        const response=await axios.get(`${url}/api/order/list`);
        if(response.data.success){
            setOrders(response.data.data);
        }
        else{
            toast.error("Error");

        }

    }
    useEffect(()=>{
        fetchOrders();
    },[]);


    return (
    <div className='order-add'>
        <h3>Order Page</h3>
        <div className='order-list'>
            {order.map((order,index)=>{
                <div key={index} className='order-item'>
                    <img src={assets.parcel_icon} alt=""/>
                    <p className='order-item-food'>
                        {order.items.map((item,index)=>{
                            if(index===order.items.length-1){
                                return item.name + "*" + item.quantity;
                            }
                            else{
                                return item.name + "*" + item.quantity + ",";
                            }
                        })}
                    </p>
                    <p className='order-item-name'>{order.address.firstName+" "+order.address.LastName}</p>
                    <div className='order-item-address'>
                        <p>{order.address.street+","}</p>
                        <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode+", "}</p>
                    </div>
                    <p className='order-item-phone'>{order.address.phone}</p>
                </div>
            })}
        </div>

        

    </div>
    
)
}
export default Orders;