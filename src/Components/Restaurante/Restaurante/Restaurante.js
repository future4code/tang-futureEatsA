import axios from "axios"
import React, { useEffect } from 'react'

function Restaurante() {
    const pegaRestaurantes = () => {
        const restaurantId = 1

        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${restaurantId}`, {
                headers: {
                    "auth": window.localStorage.getItem("token")
                }
            })
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        pegaRestaurantes()
        console.log("oi")
    }, [])

    return <div>
        Restaurante
    </div>
}

export default Restaurante
