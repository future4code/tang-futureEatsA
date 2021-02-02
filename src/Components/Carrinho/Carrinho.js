import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../Global/GlobalStateContext';
import ProductCard from '../ProductCards/ProductCard';
import { H3, P, Endereco, Div, Nome, Valor, Frete, Input, Button, DivPrincipal, CarrinhoVazio} from './Styled'

export default function Carrinho(props) {
    const data = useContext(GlobalStateContext)
    const [metodoDePagamento, setMetodoDePagamento] = useState("")
    console.log(data.states.carrinho);
    console.log(data.states.carrinhoRestaurantData);
    console.log(data.states.carrinhoDePostagem);
    console.log(data.states.perfil);
    console.log(data.states.valorTotal);

    const confirmaPedido = () => {
        const restaurantId = data.states.carrinhoRestaurantData.id;
        const body = {
            products: data.states.carrinhoDePostagem,
            paymentMethod: "creditcard"
        }

        axios
            .post(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${restaurantId}/order`, body, {
                headers: {
                    auth: window.localStorage.getItem('token'),
                }
            })
            .then((response) => data.requests.verificaPedido())
            .catch((error) => console.log(error));
    }

    const removeDoCarrinho = (id, price, category, description, name, photoUrl, quantity ) => {
        console.log("removido")
        data.setters.setValorTotal(data.states.valorTotal - (quantity * price))
    }

    return <DivPrincipal>
        <H3>Meu Carrinho</H3>

        <hr />

        <Endereco> 
            <p>Endereço de entrega</p>
            <P>{data.states.perfil.address}</P>
        </Endereco>

        <Div>
            <Nome>{data.states.carrinhoRestaurantData.name}</Nome>
            <p>{data.states.carrinhoRestaurantData.address}</p>
            {data.states.carrinhoRestaurantData.deliveryTime ? <p>{data.states.carrinhoRestaurantData.deliveryTime} - min</p> : 
            <CarrinhoVazio>carrinho vazio </CarrinhoVazio>}
        </Div>
        
        <div>
            {data.states.carrinho.map(produto => {
                return <div key={produto.id}>
                    <ProductCard
                        funcaoCardB={() => {removeDoCarrinho(produto.id, produto.price, produto.category, produto.description, produto.name, produto.photoUrl, produto.quantity)}}
                        product={produto}
                    />
                </div>
            })}
        </div>

        <Div> 
            {data.states.carrinhoRestaurantData.shipping ? <Frete>Frete R${data.states.carrinhoRestaurantData.shipping}</Frete> : 
            <Frete>Frete R$0,00</Frete>}
            <br/>
            <span>Subtotal</span>
            {data.states.restauranteData.shipping ? <Valor>R${data.states.valorTotal + data.states.restauranteData.shipping}</Valor> :
            <Valor>R$0,00</Valor>}
            <p>Forma de pagamento</p>
        </Div>
        
        <hr />

        <Input
          type="checkbox"
          defaultChecked={false}
          onClick={()=> {setMetodoDePagamento("Dinheiro")}}
        />
        <label>
            Dinheiro
        </label>
        <br />
        <Input
          type="checkbox"
          defaultChecked={false}
          onClick={()=> {setMetodoDePagamento("Cartão de credito")}}
        />
        <label>
            Cartão de credito
        </label>
        <br />

        <Button onClick={() => {confirmaPedido()}}>Confirmar</Button>

    </DivPrincipal>
}