import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Perfil() {
	const history = useHistory();
	const [endereco, setEndereco] = useState({});
	const [perfil, setPerfil] = useState({});

	const pegaTodoEndereco = () => {
		axios
			.get(
				'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address',
				{
					headers: {
						auth: window.localStorage.getItem('token'),
					},
				}
			)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	};

	const pegaPerfil = () => {
		axios
			.get(
				'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile',
				{
					headers: {
						auth: window.localStorage.getItem('token'),
					},
				}
			)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	};

	const historicoDeCompra = () => {
		axios
			.get(
				'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history',
				{
					headers: {
						auth: window.localStorage.getItem('token'),
					},
				}
			)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		pegaTodoEndereco();
		pegaPerfil();
		historicoDeCompra();
		console.log(endereco);
	}, []);

	return <div>Perfil
		<footer>
			<button onClick={() => { history.push("feed") }}>Home</button>
			<button onClick={() => { history.push("Carrinho") }}>Carrinho</button>
			<button onClick={() => { history.push("Perfil") }}>Perfil</button>
		</footer>
	</div>;
}

export default Perfil;
