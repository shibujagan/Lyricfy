import React from 'react'
import { loginEndpoint } from '../../Spotify/Spotify'
import "./Login.css";

function Login() {
  return (
    <div className='login-page'>
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className='logo' />
      <a href={loginEndpoint}>
        <div className='login-btn'>
          LOG IN
        </div>
      </a>
    </div>
  )
}

export default Login