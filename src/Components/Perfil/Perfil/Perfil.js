import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Perfil () {
    const [endereco, setEndereco] = useState({})
    const [perfil, setPerfil] = useState({})

    const pegaTodoEndereco = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address", {
            headers: {
                "auth": window.localStorage.getItem("token")
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    const pegaPerfil = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile", {
            headers: {
                "auth": window.localStorage.getItem("token")
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    const historicoDeCompra = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history", {
            headers: {
                "auth": window.localStorage.getItem("token")
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        pegaTodoEndereco()
        pegaPerfil()
        historicoDeCompra()
        console.log(endereco)
    }, [])

    return <div>
        Perfil
    </div>

}

export default Perfil