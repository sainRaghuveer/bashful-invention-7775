import React, { useState } from 'react';
import "./Home.css";
import { useToast } from '@chakra-ui/react'

const Home = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState();
  const [target, setTarget] = useState<string>("");
  const [score, setScore] = useState<number>(0)
  const [status, setStatus] = useState<boolean>(false)
  const toast=useToast();
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  // const handleTarget=(e:React.FormEvent<HTMLDivElement>)=>{
  //   console.log(e)
  // }

  const save = (value: string) => {
    setTarget(target + value)
  }

  const Delete = (value: string) => {
    setTarget("")
  }

  const refresh = (value: string) => {
    if (data == target) {
      setScore(score+10);
      toast({
        title: `Hurray!! You did it, now your score is ${score+10}`,
        status: "success",
        isClosable: true,
        position:"top"
      })
    } else {
      toast({
        title: `Oops!! You lost it`,
        status: "error",
        isClosable: true,
        position:"top"
      })
      setScore(0);
    }
    setTarget("")

  }

  const submitData = () => {
    const data = {
      num: word
    }
    try {
      setStatus(false);
      fetch(`https://dull-blue-buffalo-cuff.cyclic.app/users/random`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
        .then((res) => {
          console.log(res)
          if (res.success) {
            setStatus(true)
            setData(res.result.toUpperCase())
          } else {
            setStatus(false)
            toast({
              title: `Something went wrong`,
              status: "error",
              isClosable: true,
              position:"top"
            })
          }
        })
    } catch (err) {
      setStatus(false)
      console.log(err)
      toast({
        title: `Something went wrong`,
        status: "error",
        isClosable: true,
        position:"top"
      })
    }
  }
  return (
    <div>

      <div className='home-child1'>
        <div id='result'>
          <div id='slide'>
            <h1 id='target'>
              {(!status)?<h1>Loading...</h1>:data}
            </h1>
          </div>
          <div id='slide1'>
            <h1 id='target'>

              {target}
            </h1>
          </div>
        </div>
        <div id='score'>
          <h1>Your Score:-  {score}</h1>
        </div>
        <div className='home-child2'>
          <div id='input'>
            <input type="number" placeholder='Type Number According to your Difficulty' value={word} onChange={handleChange} />
            <button onClick={submitData}>Start</button>
          </div>
          <div id="keyboard" >
            <div>tab</div>
            <div onClick={() => save("Q")}>Q</div>
            <div onClick={() => save("W")}>W</div>
            <div onClick={() => save("E")}>E</div>
            <div onClick={() => save("R")}>R</div>
            <div onClick={() => save("T")}>T</div>
            <div onClick={() => save("Y")}>Y</div>
            <div onClick={() => save("U")}>U</div>
            <div onClick={() => save("I")}>I</div>
            <div onClick={() => save("O")}>O</div>
            <div onClick={() => save("P")}>P</div>
            <div>\</div>
            <div>caps</div>
            <div onClick={() => save("A")}>A</div>
            <div onClick={() => save("S")}>S</div>
            <div onClick={() => save("D")}>D</div>
            <div onClick={() => save("F")}>F</div>
            <div onClick={() => save("G")}>G</div>
            <div onClick={() => save("H")}>H</div>
            <div onClick={() => save("J")}>J</div>
            <div onClick={() => save("K")}>K</div>
            <div onClick={() => save("L")}>L</div>
            <div id="enter" onClick={() => refresh("")}>Enter</div>
            <div>Shift</div>
            <div onClick={() => Delete("")}>del</div>
            <div onClick={() => save("Z")}>Z</div>
            <div onClick={() => save("X")}>X</div>
            <div onClick={() => save("C")}>C</div>
            <div onClick={() => save("V")}>V</div>
            <div onClick={() => save("B")}>B</div>
            <div onClick={() => save("N")}>N</div>
            <div onClick={() => save("M")} >M</div>
            <div>{"<"}</div>
            <div>{">"}</div>
            <div id="shift">Shift</div>
            <div>Glb</div>

            <div>Ctrl</div>
            <div>Opt</div>
            <div>Alt</div>
            <div id="space">Space</div>
            <div>alt</div>
            <div>opt</div>
          </div>
        </div>
      </div>

    </div>
  )
}


export default Home;