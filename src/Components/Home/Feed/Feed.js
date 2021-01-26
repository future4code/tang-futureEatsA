import React, { useEffect } from 'react'
import axios from 'axios'
import {Header, Input, InputContainer} from './Styled'
export default function Feed (){

    const pegaRestaurantes = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants", {
            headers: {
                "auth": window.localStorage.getItem("token")
            }
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        pegaRestaurantes()
    },[])

    return(
        <div>
            <Header>
                <h1>Labe Eats</h1>
            </Header>
            {/* Só dando uma ideia geral mesmo esses 
            <hr/> ai são só pra dividir sem usar o css msm 
            antes de fazer tudo esses spans tb pra ver como ficaria + - */}
            <main> 
                <InputContainer>
                    <Input name="search" placeholder="Restaurante" type="text"/>
                </InputContainer>
                
                <div> 
                    <span> Árabe </span>
                    <span> Asiática </span>
                    <span> Hamburguer </span>
                    <span> Italiana </span>
                    <hr/>
                </div>

                <div> 
                    Ibagens
                    <hr/>
                </div>
            </main>

            <footer>
                faixa com coisas de footer
            </footer>
        </div>
    )
}