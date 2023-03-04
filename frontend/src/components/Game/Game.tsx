import React, { useEffect, useRef } from 'react'
import { CreateBoard } from '../CardTypes/CartTypes';
import { Grid } from '../Grid/Grid.styles';
import {useState} from "react"
import {shuffleArray} from "../utils/Utils";
import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
//Types fo cards that we are defined incarttypes
import {CardType} from "../CardTypes/CartTypes"
import Card1 from '../Cards/Card';
import { time } from 'console';
const Game = () => {
  
  let countRef = useRef<number>(-1);
 let [count,setCount]=useState(30)
    const [cards,setCards]=useState<CardType[]>(shuffleArray(CreateBoard()));
    const [whichWon,setWhichWon]=useState(false)
    const [matchPairs,setMatchPairs]=useState(0)
    const [clickedCard,setClickedCard]=useState<undefined|CardType>(undefined);
    const [startgame,setStartgame]=useState(false)
    useEffect(()=>{
if(matchPairs===cards.length/2){
  setWhichWon(true)
  alert("congratulations")
}
if(count===0 && matchPairs!==cards.length/2){
  alert("try again")
}
    },[matchPairs])
    console.log(CreateBoard())
    let timeref:any="hlo";
   
    function handlecardClick(whichcardclicked:CardType){
      if(startgame===true){
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
      return

    }
  }
  //   if(count===0){
  //     clearInterval(timeref)
  //   }
  //   function handleTimeout(){
  //     if(timeref!=="hlo") return
  //  timeref=setInterval(() => {
  //   console.log("i am upper count",count)
  //       setCount((prev=>prev-1))
        
  //     },1000)
  //     console.log("i am count",count)
  //  setStartgame(true)
  //   }
  const handleTimeout=()=>{
    const setIntervalId=setInterval(()=>{
      setCount((prev)=>{
        if(prev<=1){
          clearInterval(setIntervalId);
          return 0;
        }
        return prev-1;
      })
    },1000);

    const cleanup=()=>{
      clearInterval(setIntervalId);
    }
  }

    // useEffect(()=>{
      
    // },[]);
  
    // console.log("cards",cards)
   
  return (
    <div>
        {/* <CreateBoard/> */}
        <Flex  width="90%" margin="auto" p="20px" justifyContent="space-between" alignItems="center" backgroundColor="#cbb7bf">

<h1 style={{fontSize:"35px"}} >
  <span style={{color:"#191b1a"}}>Time Left</span>:{count}</h1>
<Box background="#f00aa5" p="15px 50px 15px 50px" color="white" fontSize="20px" cursor="pointer" onClick={handleTimeout}>Play</Box>
        </Flex>
        <br/><br/><br/>
         <SimpleGrid columns={[2, null, 6]} spacing='40px' width="90%" margin="auto">
          {cards.map((card,i)=>(
            <Card1 key={card.id} card={card} callback={handlecardClick}/>
         ))}</SimpleGrid>
    </div>
  )
}

export default Game
