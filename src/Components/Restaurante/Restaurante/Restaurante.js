import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import GlobalStateContext from '../../../Global/GlobalStateContext';

function Restaurante(props) {
	const data = useContext(GlobalStateContext);
	const restaurantes = data.states.restaurantes;
	console.log(restaurantes);
	return (
		<div>
			<div>
				<img src={restaurantes[0].logoUrl} alt="" />
				<h3>{restaurantes[0].name}</h3>
				<p>{restaurantes[0].category}</p>
				<p>
					<span>{restaurantes[0].deliveryTime} min </span>
					<span>Frete: R$ {restaurantes[0].shipping},00</span>
				</p>
				<p>{restaurantes[0].address}</p>
			</div>

			<div></div>
		</div>
	);
}

export default Restaurante;
