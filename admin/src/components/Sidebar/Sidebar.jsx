import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/asset';
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-options'>
                <NavLink to="/add" className='sidebar-option'>
                    <img className="sidebar-image" src={assets.addIcon} alt="" />
                    <p>Add Items</p>
                </NavLink>

                <NavLink to="/list" className='sidebar-option'>
                    <img className="sidebar-image" src={assets.order} alt="" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to="/orders" className='sidebar-option'>
                    <img className="sidebar-image" src={assets.order} alt="" />
                    <p>Orders</p>
                </NavLink>
            </div>
        </div >
    )
}
export default Sidebar;