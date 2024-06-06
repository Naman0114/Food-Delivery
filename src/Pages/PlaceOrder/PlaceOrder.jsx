import { useContext } from "react";
import { FoodContext } from "../../Context";
import './PlaceOrder.css';
const PlaceOrder = () => {
    const { getTotalPrice } = useContext(FoodContext);
    return <>
            <div className="place-order-title">
                <h4>Delivery Information</h4>
            </div>
            <form className="place-order">
                <div className="place-order-info">
                    <div className="multi-fields">
                    <input type="text" placeholder="First name"></input>
                    <input type="text" placeholder="Last name"></input>
                    </div>
                    <input type="email" placeholder="Email address"></input>
                    <input type="text" placeholder="Street"></input>
                    <div  className="multi-fields">
                    <input type="text" placeholder="State "></input>
                    <input type="text" placeholder="City"></input>
                    </div>
                    <div  className="multi-fields">
                    <input type="text" placeholder="Zip Code"></input>
                    <input type="text" placeholder="Country"></input>
                    </div>
                    <input type="text" placeholder="Phone"></input>
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
                        <button >PROCEED TO Payment</button>
                    </div>
                </div>
            </div>
        </form>
    </>

}
export default PlaceOrder;