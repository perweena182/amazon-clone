import React from 'react'
import {FaStar} from 'react-icons/fa';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider.js' ;   


function CheckoutProduct({id,title,image,price,rating}){
		const [{basket},dispatch] = useStateValue();
		console.log(id,title,price,image,rating);

		const removeFromBasket = () => {
			dispatch({
				type: "REMOVE_FROM_BASKET",
				id: id,
			});


		}

	return (
		<div className="checkoutproduct">
			<img className="checkoutproduct_image"
				src={image} alt=""/>
			<div className="checkoutproduct_info">
			<p className="checkoutproduct_title">{title}</p>
			<p className="checkoutproduct_price">
			<small>$</small>
			<strong>{price}</strong>
			</p>
			<div className="checkoutproduct_rating">
		{Array(rating)
		.fill()
			.map((_)=>(
				<FaStar className="product_review" />
			))
		}
		</div>
		<button onClick={removeFromBasket}>Remove from basket</button>
		</div>
			</div>




		
	);

}
export default CheckoutProduct;