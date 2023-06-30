import React from "react";
import './Product.css';
import {FaStar} from 'react-icons/fa';
import {useStateValue} from './StateProvider.js' ;    


function Product({id,title,price,rating,image}) {
	const [{},dispatch] = useStateValue();
	const addToBasket =()=> {
		dispatch({
			type:"ADD_TO_BASKET",
			item:{
				id:id,
				title:title,
				image:image,
				price:price,
				rating:rating,

			},
		})
	};

return (

	<div className="product">
	<div className="product_info">
	<p>{title}</p>
	<p className="product_price">
			<small>$</small>
		<strong>{price}</strong>
			</p>
	<div className="product_rating">
		{Array(rating)
		.fill()
			.map((_)=>(
				<FaStar className="product_review" />
			))
		}
		</div>
		</div>
		<img src={image} alt=""/>
		<button onClick={addToBasket}>Add To Basket</button>

</div>
	);
}

export default Product;