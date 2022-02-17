import React from 'react'
import Footer from '../component/Footer';

const Register = () => {
  return (
    <div>
      <form className="registerForm">
          <h1>Register</h1>
          <input type="email" placeholder="Email" required></input>
          <input type="password" placeholder="Password" required></input>
          <button>Register</button>
      </form>
      <Footer />
    </div>
  )
}

export default Register