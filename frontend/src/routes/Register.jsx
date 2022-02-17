import React from 'react'
import Footer from '../component/Footer'

const Register = () => {
  return (
    <>
    <form className="registerForm">
        <input type="email" placeholder="Email" required></input>
        <input type="password" placeholder="Password" required></input>
        <button>Register</button>
    </form>
    <Footer />
    </>
  )
}

export default Register