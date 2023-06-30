import React ,{useEffect} from 'react';
import './App.css';
import { BrowserRouter,Route, Routes,} from 'react-router-dom';
import { NavLink, Link ,useNavigate } from 'react-router-dom';
import Header from './Header.js';
import Home from'./Home.js';
import Product from './Product.js';
import Subtotal from './Subtotal.js';
import Checkout from'./Checkout.js';
import Login from'./Login.js';
import './Login.css';
import './Header.css';
import './Home.css';
import { IoBasketSharp} from 'react-icons/io5';
import {MdOutlineStorefront}from 'react-icons/md';
import  {FaSearch} from 'react-icons/fa';
import {FaStar} from 'react-icons/fa';
import ReactStars from 'react-stars';
import {auth} from "./firebase.js";
import {useStateValue} from './StateProvider.js' ; 





function App() {
      const [{user},dispatch] = useStateValue();
         useEffect (() => {
       const unsubscribe = auth.onAuthStateChanged((authUser) =>{
           if(authUser){
            dispatch({
              type:"SET_USER",
              user:authUser,
            });

}
           else{
             dispatch({
              type:"SET_USER",
              user:null,
            });
           }
         });
           return() => {
            unsubscribe();
           }




          
      },[]);
         console.log("user is >>>",user);

  return (
        <BrowserRouter>

    <div className="App">
    <Header/>    

      <Routes>
        <Route path='/'           element = {<Home />}/>
        <Route path='/checkout'      element = {<Checkout />}/>
                <Route path='/login'      element = {<Login />}/>

   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
