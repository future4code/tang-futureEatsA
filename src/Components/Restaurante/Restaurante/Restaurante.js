import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../../../Global/GlobalStateContext';
import ProductCard from '../../ProductCards/ProductCard'
import { Img, P, Header, Div, Logo, H3, Hr} from './Styled'
import Back from '../../../Assets/back@3x.png'

function Restaurante(props) {
	//Variáveis do restaurante
	const data = useContext(GlobalStateContext);
	const restaurante = data.states.restauranteData;
	//categoria
	const categoria = data.states.produtos.map(produto => {return produto.category})
	//filtro da categoria
	const novaCategoria = categoria.filter(function(este, i) {return categoria.indexOf(este) === i})
	const history = useHistory();
	//Coloca as compras no carrinho
	const botaCarrinho = (id, price, category, description, name, photoUrl, restaurante ) => {
		const quantidade = prompt("Selecione a quantidade desejada")

		const bodyA = {
			quantity: quantidade,
			category: category,
			description: description,
			id: id,
			name: name,
			photoUrl: photoUrl,
			price: price,
			
		}

		const bodyB = {
			quantity: quantidade,
			id: id,
			
		}
		data.setters.setValorTotal(data.states.valorTotal + (quantidade * price))
		data.setters.setCarrinhoRestaurantData(restaurante)
		data.setters.setCarrinho([...data.states.carrinho, bodyA])
		data.setters.setCarrinhoDePostagem([...data.states.carrinhoDePostagem, bodyB])
	}
	
	return (
		<div>
			<Header>
				<Img onClick={() => {history.goBack()}} src={Back}/>
				<P> Restaurante </P>	
			</Header>
			<hr/>

			<Div>
				<Logo src={restaurante.logoUrl} alt="" />
				<H3>{restaurante.name}</H3>
				<p>{restaurante.category}</p>
				<p>
					<span>{restaurante.deliveryTime} - min |</span>
					<span> Frete: R$ {restaurante.shipping},00</span>
				</p>
				<p>{restaurante.address}</p>
			</Div>

			<div>
				{novaCategoria.map(array => {
					const novoProduto = data.states.produtos.filter(produto => produto.category === array)
					return <div key={array}>
						<Hr>
							<strong>{array}</strong>
							<hr/>
						</Hr>
						<p>{novoProduto.map(outroProduto => {
							let verificaBotao = true
							
							return <div key={outroProduto.id}>
							<ProductCard
								product={outroProduto}
								verificaBotao={verificaBotao}
								carrinho={data.states.carrinho}
								funcaoCard={()=>{botaCarrinho(outroProduto.id, outroProduto.price, outroProduto.category, outroProduto.description, outroProduto.name, outroProduto.photoUrl, restaurante)}}
							/>
						</div>
						})}</p>
					</div>
				})}
                
            </div>
		</div>
	);
}

export default Restaurante;
