import React from 'react'

const Login = () => {
  return (
    <div classname="Login">
      <form className="loginForm">
        <h1 className='login'>Login</h1>
        <input type="email" placeholder="Email" required></input>
        <input type="password" placeholder="Password" required></input>
        <button>Sign in</button>
      </form>
    </div>
  )
}

export default Login