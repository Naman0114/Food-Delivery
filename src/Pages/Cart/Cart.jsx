import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../../Context";
import './Cart.css';
const Cart = () => {
    const { cartItems, food_list, clickToRemove,getTotalPrice,url} = useContext(FoodContext)
    const navigate=useNavigate();
    return <>
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
            </div>
            {food_list.map((item, index) => {
                if (cartItems?.[item._id] > 0)
                    return <>
                        <div>
                            <div className="cart-items-description">
                                <img src={url+"/images/"+item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>${item.price * cartItems[item._id]}</p>
                                <p onClick={() => clickToRemove(item._id)} className="remove">x</p>
                            </div>
                            <hr />
                        </div>
                    </>
            })}
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalPrice()}</p>
                            
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivery</p>
                            <p>{getTotalPrice()===0?0:2}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>{getTotalPrice()===0?0:getTotalPrice()+2}</b>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promo-code">
                    <div>
                        <p>If you have a promo code,it here</p>
                        <div className="c-p-c-input">
                            <input type="text" placeholder="promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
}
export default Cart;