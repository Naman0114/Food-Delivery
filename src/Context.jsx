import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FoodContext = createContext({
    cartItems: () => { },
    clickToRemove: () => { },
    getTotalPrice:()=>{},
    food_list: [],
})

const ContextAPI = ({ children }) => {
    const [cartItems, SetCartItems] = useState({});
    const url="https://food-backend-1-oxvc.onrender.com";
    const [token,setToken]=useState("");
    
    const[food_list,setFoodList]=useState([]);

    const addToCart = async(itemId) => {
        if (!cartItems?.[itemId]) {
            SetCartItems((prev) => ({ ...prev, [itemId]: 1 }));

        }
        else {
            SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}});
        }
    }

    const clickToRemove = async(itemId) => {
        SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        }

    }

    const getTotalPrice = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((pro) => pro._id === item);
                
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                } else {
                    console.warn(`Item with ID ${item} not found in food_list`);
                }
            
            }
        }
        return totalAmount;
    }

    const fetchFoodList=async()=>{
        const response=await axios.get(url +'/api/food/list');
        setFoodList(response.data.data);
    }

    const loadCartData = async (token) => {
        try {
            const response = await axios.get(url + "/api/cart/get", {
                headers: { token }  
            });
            SetCartItems(response.data.cartData);
        } catch (error) {
            console.error("Error loading cart data:", error);
        }
    };

    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[]);



    return (
    <FoodContext.Provider value={{ food_list, addToCart, cartItems, clickToRemove, getTotalPrice,url,
        token,setToken }}>
        {children}
    </FoodContext.Provider>

    )
}

export default ContextAPI;

