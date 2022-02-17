import React from 'react'
import Footer from '../component/Footer'

const Login = () => {
  return (
    <>
      <form className="loginForm">
        <input type="email" placeholder="Email" required></input>
        <input type="password" placeholder="Password" required></input>
        <button>Sign in</button>
      </form>
      <Footer />
    </>
  )
}

export default Login