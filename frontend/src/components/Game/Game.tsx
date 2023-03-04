import React from 'react'
import { CreateBoard } from '../CardTypes/CartTypes';
import { Grid } from '../Grid/Grid.styles';
import {useState} from "react"
import {shuffleArray} from "../utils/Utils";
//Types fo cards that we are defined incarttypes
import {CardType} from "../CardTypes/CartTypes"
import Card1 from '../Cards/Card';
const Game = () => {
    const [cards,setCards]=useState<CardType[]>(shuffleArray(CreateBoard()));
    const [whichWon,setWhichWon]=useState(false)
    const [matchPairs,setMatchPairs]=useState(0)
    const [clickedCard,setClickedCard]=useState<undefined|CardType>(undefined);
    console.log(CreateBoard())
    function handlecardClick(whichcardclicked:CardType){
      setCards(prev=>prev.map(card=>card.id===whichcardclicked.id ? {...card,flipped:true,clickable:false}:card))
      if(!clickedCard){
        setClickedCard({...whichcardclicked})
        return
      }
      if(clickedCard.matchingCardId===whichcardclicked.id){
        setMatchPairs(prev=>prev+1)
        setCards(prev =>
          prev.map(card =>
            card.id === clickedCard.id || card.id === whichcardclicked.id
              ? { ...card,  clickable: false }
              : card
          )
        )
       setClickedCard(undefined)
        return
      }
      setTimeout(() => {
        setCards(prev=>prev.map(card=>card.id===clickedCard.id||card.id===whichcardclicked.id?{...card,flipped:false,clickable:true}:card))
      }, 1000);
      setClickedCard(undefined)

    }
   
    // console.log("cards",cards)
    
  return (
    <div>
        {/* <CreateBoard/> */}
         <Grid>{cards.map((card,i)=>(
            <Card1 key={card.id} card={card} callback={handlecardClick}/>
         ))}</Grid>
    </div>
  )
}

export default Game
