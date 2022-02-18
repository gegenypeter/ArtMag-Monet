import React from 'react'

const Register = () => {
  return (
    <div className="Register">
      <form className="registerForm">
          <h1>Register</h1>
          <input type="email" placeholder="Email" required></input>
          <input type="password" placeholder="Password" required></input>
          <button>Register</button>
      </form>
    </div>
  )
}

export default Register