import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from '../../assets/asset';
import './Add.css';

const Add = ({url}) => {

    const [image, setImage] = useState(false);

    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });
    
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))

    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        
        const response = await axios.post(`${url}/api/food/add`,formData);

        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad"
            })
            setImage(false);
            toast.success(response.data.message);
        }
        else{
            toast.error(response.data.message);
        }
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='image-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" />
                    </label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} id="image" hidden required />
                </div>
                <div className='product-name flex-col'>
                    <p>Product Name</p>
                    <input type='text' onChange={onChangeHandler} value={data.name} name='name' placeholder='Type here' />
                </div>
                <div className='product-desc flex-col'>
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write content here' />
                </div>
                <div className='category-price'>
                    <div className='category flex-col'>
                        <p>Product Category</p>
                        <select name='category' onChange={onChangeHandler} value={data.category}>
                            <option value='Salad'>Salad</option>
                            <option value='Rolls'>Rolls</option>
                            <option value='Deserts'>Deserts</option>
                            <option value='Sandwich'>Sandwich</option>
                            <option value='Cake'>Cake</option>
                            <option value='Pure Veg'>Pure Veg</option>
                            <option value='Pasta'>Pasta</option>
                            <option value='Noodles'>Noodles</option>
                        </select>
                    </div>
                    <div className='add-price flex-cols'>
                        <p>Product Price</p>
                        <input type="Number" onChange={onChangeHandler} value={data.price} name="price" placeholder='$20' />
                    </div>
                </div>
                <div>
                    <button type='submit' className='add-btn'>Add</button>
                </div>
            </form>
        </div>

    )
}
export default Add;