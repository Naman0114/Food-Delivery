import { createContext, useState } from "react";
import { food_list } from "./assets/Image/assets/assets";

export const FoodContext = createContext({
    cartItems: () => { },
    clickToRemove: () => { },
    getTotalPrice:()=>{},
    food_list: []

})

const ContextAPI = ({ children }) => {
    const [cartItems, SetCartItems] = useState({});
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            SetCartItems((prev) => ({ ...prev, [itemId]: 1 }))

        }
        else {
            SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const clickToRemove = (itemId) => {
        SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    }

    const getTotalPrice = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((pro) => pro._id === item);
                console.log(itemInfo)
                totalAmount += itemInfo.price * cartItems[item];
                console.log(itemInfo.price)
                console.log(parseInt(totalAmount))
            }
        }
        return totalAmount;
    }



    return (
    <FoodContext.Provider value={{ food_list, addToCart, cartItems, clickToRemove, getTotalPrice }}>
        {children}
    </FoodContext.Provider>

    )
}

export default ContextAPI;

