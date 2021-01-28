import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext"
import axios from "axios";
import { useHistory } from 'react-router-dom'

const GlobalState = (props) => {
    const [restaurantes, setRestaurantes] = useState([])
    const [restauranteId, setRestauranteId] = useState("")
    const [restauranteData, setRestauranteData] = useState({})
    const [produtos, setProdutos] = useState([])
    const [carrinho, setCarrinho] = useState([])
    const [valorDaCompra, setValorDaCompra] = useState(0)

    useEffect(() => {
        console.log(carrinho);
        console.log(valorDaCompra);
    }, [carrinho])

    useEffect(() => {
        pegaRestaurantes()
    }, [])

    useEffect(() => {
        if (restauranteId) {
            pegaRestauranteId()
        }
    }, [restauranteId])

    const pegaRestaurantes = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants", {
                headers: {
                    "auth": window.localStorage.getItem("token")
                }
            })
            .then(response => setRestaurantes(response.data.restaurants))
            .catch(error => console.log(error))
    }

    const pegaRestauranteId = () => {

        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${restauranteId}`, {
                headers: {
                    "auth": window.localStorage.getItem("token")
                }
            })
            .then(response => {
                setRestauranteData(response.data.restaurant)
                setProdutos(response.data.restaurant.products)
            })
            .catch(error => console.log(error))
    }

    const states = { restaurantes, restauranteId, restauranteData, produtos, carrinho, valorDaCompra }
    const setters = { setRestaurantes, setRestauranteId, setCarrinho, setValorDaCompra }
    const requests = {}

    const data = { states, setters, requests }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider >
    )
}
export default GlobalState