import axios from "axios"
import React, { useEffect, useContext } from 'react'
import GlobalStateContext from '../../../Global/GlobalStateContext'

function Restaurante(props) {
    const data = useContext(GlobalStateContext)

    console.log(data.states.restauranteData)

    return <div>
        Restaurante
    </div>
}

export default Restaurante
