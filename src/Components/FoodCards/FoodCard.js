import { useHistory } from "react-router-dom"
import React from 'react'
import {MainDiv, DivImg, DivDetalhes, Img, P} from './Styled'

export default function FoodCard (props) {
    const history = useHistory()
    
    return(
        <MainDiv>
            <DivImg>
                <Img src={props.restaurant.logoUrl}/>
            </DivImg>
            <div>
                <h3>{props.restaurant.name}</h3>
            </div>
            <DivDetalhes>
                <P>{props.restaurant.deliveryTime}-min </P>
                <P>Frete R${props.restaurant.shipping},00</P>
            </DivDetalhes>
        </MainDiv>
    )
}