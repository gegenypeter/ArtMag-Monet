import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await axios.post('http://localhost:4000/api/signup', {
        email: email,
        password: password
      })
      alert('successful registration')
      setEmail('')
      setPassword('')
    } catch (err) {
      if (!err.response) return alert('Ooops...Something went wrong')
      if (err.response.status === 409) {
        alert('User already exist')
      }

      if (err.response.status === 400) {
        alert('Missing credentials')
      }
    }

  }

  return (
    <div className="Register">
      <form className="registerForm">
          <h1>Register</h1>
          <input type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}></input>
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}></input>
          <button onClick={() => register()}>Sign up</button>
      </form>
    </div>
  )
}

export default Register