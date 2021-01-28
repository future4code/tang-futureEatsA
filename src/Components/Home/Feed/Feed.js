import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Header, Input, InputContainer } from './Styled';
import FoodCard from '../../FoodCards/FoodCard';
import GlobalStateContext from '../../../Global/GlobalStateContext';
import { useHistory } from 'react-router-dom';

export default function Feed() {
	const history = useHistory();
	const data = useContext(GlobalStateContext);
	const restaurantes = data.states.restaurantes;

	const pegaRestauranteId = (id) => {
		data.setters.setRestauranteId(id);
		history.push(`restaurante/${restaurantes.name}`);
	};

	return (
		<div>
			<Header>
				<h1>Labe Eats</h1>
			</Header>

			<main>
				<InputContainer>
					<Input
						name="search"
						placeholder="Restaurante"
						type="text"
					/>
				</InputContainer>

				<div>
					<span> Árabe </span>
					<span> Asiática </span>
					<span> Hamburguer </span>
					<span> Italiana </span>
					<hr />
				</div>

				<div>
					{restaurantes.map((array) => {
						return (
							<div
								key={array.id}
								onClick={() => {
									pegaRestauranteId(array.id);
								}}
							>
								<FoodCard restaurant={array} />
							</div>
						);
					})}
				</div>
			</main>

			<footer>faixa com coisas de footer</footer>
		</div>
	);
}
