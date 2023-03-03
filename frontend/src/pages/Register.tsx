import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../pages/Register.css'

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const Navigate = useNavigate()

  const RegisterFunc = () => {
    const obj = {
      name, email, password
    }
    console.log(obj)
    try {

      fetch(`https://dull-blue-buffalo-cuff.cyclic.app/users/register`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => res.json())
        .then((res) => {
          if (res.success) {
            alert("Register")
            Navigate('/login')
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
    <div className='register-main-con'>
      <h1>Register</h1>
      <img className='bird1' src="https://i.gifer.com/ZHug.gif" alt="" />
      <div className='register-input-con'>
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={RegisterFunc}>Register</button>
      </div>
      <img className='bird2' src="https://thumbs.gfycat.com/TiredOblongArabianhorse-size_restricted.gif" alt="" />
    </div>
  )
}

export default Register