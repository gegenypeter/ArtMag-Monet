import React from 'react'
import Footer from '../component/Footer'

const Login = () => {
  return (
    <>
      <form className="loginForm">
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button>Sign in</button>
      </form>
      <Footer />
    </>
  )
}

export default Login