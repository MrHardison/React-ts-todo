import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import './auth.sass'

const Auth = ({ history }) => {
  const [authData, setAuthData] = useState({ login: '', password: ' ' })
  const [errorText, setErrorText] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value })
    setErrorText('')
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(0)
    if (!authData.login.trim() || !authData.password.trim()) {
      setErrorText('Login and password must be filled!')
    } else {
      // redirect to home
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-form">
        <h3>Authorization</h3>
        <input className="auth-input" placeholder="Input your login" type="text" name="login" onChange={handleInput} />
        <input
          className="auth-input"
          placeholder="Input your password"
          type="password"
          name="password"
          onChange={handleInput}
        />
        <button className="auth-btn" onClick={handleSubmit}>
          Login
        </button>
        <div className={`auth-error ${errorText.trim() ? 'visible' : ''}`}>{errorText}</div>
      </form>
    </div>
  )
}

export default Auth
