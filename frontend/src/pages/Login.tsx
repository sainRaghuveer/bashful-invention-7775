import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../pages/Register.css'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState<string>("")

  const Navigate = useNavigate()

  const RegisterFunc = () => {
    const obj = {
      email, password
    }
    console.log(obj)
    try {

      fetch(`https://dull-blue-buffalo-cuff.cyclic.app/users/login`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
        .then((res) => {
          if (res.msg == "Login Successful") {
            setName(res.user[0].name);
            localStorage.setItem("gameUsername",JSON.stringify(name));
            alert("Login Successful")
            Navigate('/allgame')
            console.log(res)

          } else {
            alert(res.message)
          }
          console.log(res)
        })
    } catch (err) {
      console.log(err)
      alert("Something Wrong")
    }
  }
  return (
    <div>
      <div className='register-main-con'>
        <h1>Login</h1>
        <img className='bird1' src="https://i.gifer.com/ZHug.gif" alt="" />
        <div className='register-input-con'>

          <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <button onClick={RegisterFunc}>Login</button>
        </div>
        <img className='bird2' src="https://thumbs.gfycat.com/TiredOblongArabianhorse-size_restricted.gif" alt="" />
      </div>
    </div>
  )
}

export default Login