import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import GlobalStateContext from '../../../Global/GlobalStateContext';
import ProductCard from '../../ProductCards/ProductCard'

function Restaurante(props) {
	const data = useContext(GlobalStateContext);
    const restaurante = data.states.restauranteData;
	
	return (
		<div>
			<div>
				<img src={restaurante.logoUrl} alt="" />
				<h3>{restaurante.name}</h3>
				<p>{restaurante.category}</p>
				<p>
					<span>{restaurante.deliveryTime} min </span>
					<span>Frete: R$ {restaurante.shipping},00</span>
				</p>
				<p>{restaurante.address}</p>
			</div>

			<div>
                {data.states.produtos.map(produto => {
                    return <div key={produto.id}>
                        <ProductCard
                            product={produto}
                        />
                    </div>
                })}
            </div>
		</div>
	);
}

export default Restaurante;
