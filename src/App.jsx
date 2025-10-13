import { useState } from 'react'
import './App.css'
import Login from './components/Login';

function App() {
  const [isUserLoggedIn, setLogin] = useState(false)
  const [isWrongCredentials, SetWrongCredentials] = useState(false)

  function handleLogin(credentials) {
    if(credentials.username.trim('') === 'admin' && credentials.password.trim('') === 'admin') {
      setLogin(true);
    } else {
      SetWrongCredentials(true)
    }
  }
  return (
    <>
      {!isUserLoggedIn && <Login onLogin={handleLogin} isWrongCredentials={isWrongCredentials}/>}
      {isUserLoggedIn && <p>YOU ARE LOGED IN</p>}
    </>
  )
}

export default App
