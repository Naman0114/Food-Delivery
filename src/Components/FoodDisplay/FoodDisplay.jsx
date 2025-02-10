import { useContext } from "react";
import { FoodContext } from "../../Context";
import FoodItem from "../FoodItem/FoodItem";
import './FoodDisplay.css';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(FoodContext)
    return <>
        <div className="food-display" id="food-display">
            <h2>Dishes for  you</h2>

            <div className="food-d-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description}
                            price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    </>
}
export default FoodDisplay;