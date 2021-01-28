import React, { useContext } from 'react';
import { Prompt } from 'react-router-dom';
import GlobalStateContext from '../../Global/GlobalStateContext';

export default function ProductCard(props) {
	const data = useContext(GlobalStateContext);

	const botaCarrinho = (id, price, category, description, name, photoUrl) => {
		const quantidade = prompt("Quantidade")
		const body = {
			quantity: quantidade,
			category: category,
			description: description,
			id: id,
			name: name,
			photoUrl: photoUrl,
			price: price
		}
		data.setters.setCarrinho([...data.states.carrinho, body])
		data.setters.setValorDaCompra((price * quantidade + data.states.valorDaCompra))
	}

	return (
		<div>
			<div>
				<img src={props.product.photoUrl} alt="imagem do produto" />
			</div>
			<div>
				<h3>{props.product.name}</h3>
				<p>{props.product.ingredients}</p>
			</div>
			<div>
				<p>R${props.product.price},00 </p>
				<button onClick={() => { botaCarrinho(props.product.id, props.product.price, props.product.category, props.product.description, props.product.name, props.product.photoUrl) }}>Adicionar</button>
			</div>
		</div>
	);
}
