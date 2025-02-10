import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/Image/assets/assets';
import { FoodContext } from '../../Context';
import './MyOrder.css';

const MyOrder = () => {

    const { url, token } = useContext(FoodContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + '/api/order/usersOrder', {}, { header: { token } });
        setData(response.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className='container'>
                {data.map((order, index) => {
                    return(
                        <div key={index} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt=""></img>
                            <p>{order.items.map((item,index)=>{
                                if(index===order.items.length-1){
                                    return item.name+ "*"+item.quantity
                                }
                                else{
                                    return item.name+ "*"+item.quantity,", ";
                                }
                            })}</p>
                            <p>${order.amount}.00</p>
                            <p>Items:{order.items.length}</p>
                            <p><span>&#*25cf;</span><b>{order.status}</b></p>
                            <button>Track Order</button>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default MyOrder;