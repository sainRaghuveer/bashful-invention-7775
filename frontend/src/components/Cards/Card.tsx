import React from "react"
import {CardType} from "../CardTypes/CartTypes";
import {Wrapper,FrontImg,BackImg} from "./Card.styles"
//type
type Props={
    card:CardType,
    callback:(card:CardType)=>void;
}


const Card1 : React.FC<Props> = ({card,callback}) => {
 const handleClick=()=>{
  if(card.clickable) callback(card)
 }
 return (
    <Wrapper onClick={handleClick}>
        <FrontImg flipped={card.flipped} src={card.frontImage} alt="something wrong"/>
        <BackImg flipped={card.flipped} src={card.backImage} alt="something wrong with back image"/>
    </Wrapper>
 )
  }
  export default Card1;