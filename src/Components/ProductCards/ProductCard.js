import React from 'react';

export default function FoodCard(props) {
	return (
		<div>
			<div>
				<img src={props.product.logoUrl} alt="imagem do produto" />
			</div>
			<div>
				<h3>{props.product.name}</h3>
				<p>{props.product.ingredients}</p>
			</div>
			<div>
				<p>R${props.restaurant.value},00 </p>
				<button>Adicionar</button>
			</div>
		</div>
	);
}
