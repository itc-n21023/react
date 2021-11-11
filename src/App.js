import React, { useState } from 'react'
import './App.css'

const LoginButton = (props) => (
  <button onClick = {props.toggleIsLoggedIn}>ログイン</button>
)

const LogoutButton = (props) => (
  <button onClick = {props.toggleIsLoggedIn}>ログアウト</button>
)



export default LoginControl
