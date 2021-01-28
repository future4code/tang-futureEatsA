import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../../Global/GlobalStateContext';

export default function Carrinho(props) {
    const data = useContext(GlobalStateContext)
    const history = useHistory()
    console.log(data.states.carrinho);
    console.log(data.states.carrinho);
    useEffect(() => {

    }, [])

    return <div>
        <p>carrinho</p>
        <p>carrinho</p>
        <p>frete</p>
        <span>Subtotal</span><span>10</span>
        <p>Forma de pagamento</p>
        <hr />
        <input type="radio" checked="checked" name="radio" />
        <label>
            Dinheiro
        </label>
        <br />

        <input type="radio" name="radio" />
        <label>
            Cartão de credito
        </label>
        <br/>
        <button>place order</button>
        <br />
        <button onClick={() => { history.push("feed") }}>Home</button>
        <button onClick={() => { history.push("Carrinho") }}>Carrinho</button>
        <button onClick={() => { history.push("Perfil") }}>Perfil</button>

    </div>
}