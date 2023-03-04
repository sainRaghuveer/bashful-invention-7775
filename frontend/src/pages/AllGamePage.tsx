import React, { useState } from 'react';
import "./AllGamePage.css";
import { useNavigate } from 'react-router-dom'
import { Interface } from 'readline';
import { game } from '../constants';
import { useToast } from '@chakra-ui/react'


const AllGamePage = () => {

    // const [name, setName] = useState<string>("");

    const Navigate = useNavigate();
    const toast=useToast();
    
    // function getCurrentUser(): void {
    //     let userStr = localStorage.getItem('gameUsername');
    //     setName(JSON.parse(userStr))
    //   }
      

    const bounceBall=()=>{
        Navigate("/bouncing")
        toast({
            title: `Welcome in bouncing world`,
            status: "info",
            isClosable: true,
            position:"top"
          })
    }

    const matching=()=>{
        Navigate("/home")
        toast({
            title: `Welcome in word world`,
            status: "info",
            isClosable: true,
            position:"top"
          })
    }

    const cards=()=>{
        Navigate("/cardgame")
        toast({
            title: `Welcome in cards world`,
            status: "info",
            isClosable: true,
            position:"top"
          })
    }
  return (
    <div id='container'>
        <h1>All Games</h1>
        <div id='child'>
            <div className="children">
                <img src="https://e7.pngegg.com/pngimages/731/1016/png-clipart-crazy-bouncing-ball-game-app-store-bouncy-balls-others-game-sphere-thumbnail.png" alt="" />
                <button onClick={bounceBall}>Play</button>
            </div>
            <div className="children">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6FjDch9b1JXx2zYsDPzo5ICXdurlbzcnlg&usqp=CAU" alt="" />
                <button onClick={matching}>Play</button>
            </div>
            <div className="children">
                <img src="https://www.memozor.com/templates/memoire/images/zoom/memory_game_the_minions_characters.jpg" alt="" />
                <button onClick={cards}>Play</button>
            </div>
        </div>
    </div>
  )
}

export default AllGamePage