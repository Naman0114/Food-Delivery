import { menuList } from '../assets/assets'
import './ExploreMenu.css'
const ExploreMenu = ({category,SetCategory}) => {
    return <>
            <div className='menu-text' id="explore-menu">
                <h1>See our Menu</h1>
                <p>Choose from a diverse menu featuring a delectable array.</p>
                <div className='menu-list'>
                    {menuList.map((item, index) => (
                        <div key={index} onClick={()=>SetCategory(prev=>prev===item.menuName?"All":item.menuName)}   className='m-l-item'>
                            <img className={category===item.menuName?"active":""} src={item.menuImage} alt="image not found" />
                            <p>{item.menuName}</p>
                        </div>
                    ))}
                </div>
                <hr className='hr'/> 
            </div>


    </>
}
export default ExploreMenu