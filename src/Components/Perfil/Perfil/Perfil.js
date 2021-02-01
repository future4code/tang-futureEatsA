import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../../Global/GlobalStateContext';
import {Endereco, Div, H3} from './Styled'
import CardHistorico from '../../CardHistorico/CardHistorico'

function Perfil() {
	const data = useContext(GlobalStateContext)
	console.log(data.states.perfil);
	console.log(data.states.endereco);
	console.log(data.states.historicoDeCompra);
	return(
		<div>
			<H3> Meu Perfil </H3>
			<hr/>
			<Div>
				<p>{data.states.perfil.name}</p>
				<p>{data.states.perfil.email}</p>
				<p>{data.states.perfil.cpf}</p>
			</Div>
			<Endereco>
				<p>Endereço cadastrado</p>
				<h5>{data.states.endereco.street}, {data.states.endereco.number} - {data.states.endereco.neighbourhood}</h5>
			</Endereco>
			<Div>
				<p>Histórico de Pedidos</p>
				<hr/>
				<p>{data.states.historicoDeCompra.map(array => {
					return <div key={array.createdAt}>
						<CardHistorico
							name={array.restaurantName}
							tempo = {array.createdAt}
							valorTotal = {array.totalPrice}
						/>
					</div>
				})}</p>
			</Div>
		</div>
	)
}

export default Perfil;
