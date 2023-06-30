    import React from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom'
 import Login from'./Login.js';
import {auth}from "./firebase.js";

import {IoBasketSharp}from 'react-icons/io5';
import {MdOutlineStorefront}from 'react-icons/md';
import  {FaSearch} from 'react-icons/fa';
  import {useStateValue} from './StateProvider.js' ;    
function Header () {
    const [{basket,user}] = useStateValue();
    console.log(basket);
    const login = () => {
        if(user){
            auth.signOut();        
    }
};
 return (
 	<div className="header">
 		 <Link to ="/"><div className="header_logo">
 		<img className="header_logoImage" src="https://wallpapers.com/images/hd/amazon-logo-on-black-background-o121czsdkvmzh6e9.jpg" alt=" "/>
                   </div></Link>
       
 		<div className="header_search">
        <input type="text" className="header_searchInput"/>
        <FaSearch className="header_searchicon"/>
 		</div>
 		<div className="header_nav">
 			<div className="nav_item">
            <div onClick={login} className="header_option">
 				<div className="nav_itemlineone">Hello {user?.email}</div>
 				<Link to ={!user && "/login"}><div className="nav_itemlinetwo"><a>{user ?'Sign Out':'SignIn'}</a></div></Link></div>
                </div>
 			
 			<div className="nav_item">
 				<span className="nav_itemlineone">Your</span>
 				<span className="nav_itemlinetwo">Shop</span>
 			</div>
 			<div className="nav_item">
 			<Link to ="/checkout"><a><IoBasketSharp fontSize="large" className="itemBasket"/></a></Link>
 				<span className="nav_itemlinetwo nav_Basketcount">{basket?.length}</span>
 			</div>
            </div>

 	</div>


 	);

}
export default Header;