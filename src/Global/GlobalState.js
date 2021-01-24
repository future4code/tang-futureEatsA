import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext"
import axios from "axios";
import { useHistory } from 'react-router-dom'

const GlobalState = (props) => {
    const [login, setLogin] = useState([])
    const [sign, setSogin] = useState([])
    const [address, setAddress] = useState([])
    const [carrinho, setCarrinho] = useState([])
    const [busca, setBusca] = useState([])

    const states = {}
    const setters = {}
    const requests = {}

    const data = { states, setters, requests }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider >
    )
}
export default GlobalState