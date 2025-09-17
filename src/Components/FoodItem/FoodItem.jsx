import { useContext } from 'react';
import { FoodContext } from '../../Context';
import { assets } from '../../assets/Image/assets/assets';
import './FoodItem.css';
const FoodItem=({id,name,description,price,image})=>{
    const {cartItems,addToCart,clickToRemove,url}=useContext(FoodContext);
    
    return<> 
    <div className='food-i'>
        <div className='f-i-img-container'>
            <img className='f-i-img' src={image} alt="image not found"/>
            {!cartItems?.[id]
            ?<img className='add' src={assets.add_icon_white} onClick={()=>addToCart(id)}/>:
            <div className='f-i-counter'> 
            <img src={assets.remove_icon_red} onClick={()=>clickToRemove(id)} alt=""/>
            <p>{cartItems?.[id]}</p>
            <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt=""/>            
            </div>}
            
        </div>
        <div className='f-i-info'>
            <div className='f-i-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="img not found"></img>
            </div>
            <p className='f-i-desc'>{description}</p>
            <p className='f-i-price'>${price}</p>
        </div>
    </div>  
    </>
}
export default FoodItem;