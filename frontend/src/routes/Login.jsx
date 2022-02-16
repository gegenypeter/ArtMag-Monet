import React from 'react'

const Login = () => {
  return (
    <form className="loginForm">
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button>Sign in</button>
    </form>
  )
}

export default Login