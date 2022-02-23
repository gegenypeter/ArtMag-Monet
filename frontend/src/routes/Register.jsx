import React from 'react';
import { useState } from 'react';
import { register, logIn } from '../api/middleProvider'
import { useNavigate } from 'react-router-dom'


const Register = (props) => {

  const {setEmail, setIsLoggedIn} = props;

  const [emailText, setEmailText] = useState("")
  const [passwordText, setPasswordText] = useState("");

  const navigate = useNavigate();

  const registerClick = async () => {
    const status = await register(emailText, passwordText);
    if ((status) === 200) {
      setIsLoggedIn(await logIn(setEmail, emailText, passwordText));
      alert('successful registration');
      setEmailText('');
      setPasswordText('');
      navigate('/');
    }
    else {
      if (!status) return alert('Ooops...Something went wrong');
      if (status === 409) {
        alert('User already exist')
      }
      if (status === 400) {
        alert('Missing credentials')
      }
    }
  }

  return (
    <div className="Register">
      <form className="registerForm">
          <h1>Register</h1>
          <input type="email" value={emailText} placeholder="Email" onChange={(e) => setEmailText(e.target.value)} pattern="^([a-zA-Z0-9_-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$" required/>
          <input type="password" value={passwordText} placeholder="Password" onChange={(e) => setPasswordText(e.target.value)} required/>
          <button onClick={() => registerClick()}>Send</button>
      </form>
    </div>
  )
}

export default Register