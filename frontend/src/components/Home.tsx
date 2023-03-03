import React, { useState } from 'react';
import "./Home.css";
import axios from 'axios';

const Home = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState();
  const [target, setTarget] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }



  const submitData = () => {
    const data = {
      num: word
    }
    try {
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
            setData(res.result.toUpperCase())
          } else {
            alert("Something went wrong")
          }
        })
    } catch (err) {
      console.log(err)
      alert("Something went wrong")
    }
  }
  return (
    <div>

      <div className='home-child1'>
        <div id='result'>
          <div>
            <h1 id='target'>
              {data}
            </h1>
          </div>
          <div>
            <h1 id='target'>
              raghu
            </h1>
          </div>
        </div>

        <div className='home-child2'>
          <div id='input'>
            <input type="number" placeholder='Type Number According to your Difficulty' value={word} onChange={handleChange} />
            <button onClick={submitData}>Start</button>
          </div>
          <div id="keyboard">
            <div>~</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>0</div>
            <div>dlt</div>
            <div>tab</div>
            <div>Q</div>
            <div>W</div>
            <div>E</div>
            <div>R</div>
            <div>T</div>
            <div>Y</div>
            <div>U</div>
            <div>I</div>
            <div>O</div>
            <div>P</div>
            <div>\</div>
            <div>caps</div>
            <div>A</div>
            <div>S</div>
            <div>D</div>
            <div>F</div>
            <div>G</div>
            <div>H</div>
            <div>J</div>
            <div>K</div>
            <div>L</div>
            <div id="enter">Enter</div>
            <div>Shift</div>
            <div>Z</div>
            <div>X</div>
            <div>C</div>
            <div>V</div>
            <div>B</div>
            <div>N</div>
            <div>M</div>
            <div>{"<"}</div>
            <div>{">"}</div>
            <div id="shift">Shift</div>
            <div>Glb</div>

            <div>Control</div>
            <div>Option</div>
            <div>Alt</div>
            <div id="space">Space</div>
            <div>alt</div>
            <div>option</div>
            <div>Ext</div>
            <div>Ext</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home