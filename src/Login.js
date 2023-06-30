import React ,{useState} from "react";
import './Login.css';
import {useStateValue} from './StateProvider.js' ; 
import { useNavigate , Link } from 'react-router-dom';
import {auth}from "./firebase.js";





function Login() {
	const navigate=useNavigate();
	 //const [user,setUser] = useState({ email:'',password:'' });
    //const {email,password} = user;
    const [email,setEmail] =useState("");
		const[password,setPassword] =useState("");
   
    function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
	 function handleChangePassword(event) {
    setPassword(event.target.value);
  }
	



	const login = (event) => {
		event.preventDefault(); //prevent refreshing of webpages after click on sign in button
		//do the login logic
		auth
		.signInWithEmailAndPassword(email,password)
		.then((auth) => {
			navigate('/');
		})
			.catch((e) => alert(e.message));

};

		const register = (event) => {
		event.preventDefault(); //prevent refreshing of webpages after click on sign in button
		//do the register logic
			auth
			.createUserWithEmailAndPassword(email,password)
			.then((auth) => {
				navigate('/');
			})
			.catch((e) => alert(e.message));

		};



	return(
			<div className="login">
		
		<Link to ="/"><img className="login_logo" src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg" alt=""/></Link>
		<div className="login_container">
		<h1>Sign in </h1>
		<form>
		<h5>E-mail</h5>
		<input value= {email} onChange={handleChangeEmail}   type="email"/>
		<h5>Password</h5>
		<input value= {password} onChange={handleChangePassword} type="password" />
		<button onClick={login} type="submit" className="login_signInButton">Sign in</button>
		</form>
		<p>
		By signing-in you agree to Amazon's Conditions of Use & Sale.
		Please see our Privacy Notice,our Cookies Notice and our internet-Based Ads
		 Notice.
		 </p>
		 		<button onClick={register} type="submit" className="login_registerButton">Create your Amazon Account</button>

		</div>
		</div>


		);
}
export default Login;