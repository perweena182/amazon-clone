import React from "react";
import './Checkout.css';
import {useStateValue} from './StateProvider.js' ;   
import CheckoutProduct from'./CheckoutProduct.js';
import CurrencyFormat from "react-currency-format";
import Subtotal from'./Subtotal.js';

   
function Checkout() {
	const [{basket}] = useStateValue();return (
		<div className="checkout">
				<div className="checkout_left">

	<img className="checkout_ad" src="https://bfsi.eletsonline.com/wp-content/uploads/2018/08/Amazon-pay.jpg" alt=""/>
	{basket?.length === 0 ? (
		<div>
			<div className="basket">Your Shopping Basket Is Empty </div>

</div>
		):(
		<div>
		<h1 className="checkout_title">Your Shopping Basket</h1>
		{basket.map(item =>(
					<CheckoutProduct
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
					/>)) }
		</div>
		)
}
</div>
{basket.length >0 && (
		<div className="checkout_right">
		<Subtotal/>
		</div> 
)}
  </div>

);

}

export default Checkout;