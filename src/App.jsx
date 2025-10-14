import { useContext, useState } from 'react'
import './App.css'
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import NoEmployeesTemplate from './components/NoEmployeesTemplate';
import EmpoyeeContextProvider from '../src/store/employees-context';
import { EmpoyeesContext } from '../src/store/employees-context';

function App() {
  const [isUserLoggedIn, setLogin] = useState(true)
  const [isWrongCredentials, SetWrongCredentials] = useState(false)
  const { employeesListlist } = useContext(EmpoyeesContext)

  function handleLogin(credentials) {
    if(credentials.username.trim('') === 'admin' && credentials.password.trim('') === 'admin') {
      setLogin(true);
    } else {
      SetWrongCredentials(true)
    }
  }

  return (
    <EmpoyeeContextProvider>
      <div className="flex h-screen w-screen">
        {!isUserLoggedIn ? (
          <div className="flex-1">
            <Login onLogin={handleLogin} isWrongCredentials={isWrongCredentials} />
          </div> 
        ) : (
          <>
            <Sidebar />
            {employeesListlist.length === 0 && <div className="flex-1">
              <NoEmployeesTemplate />
            </div>}
          </>
        )}
      </div>
    </EmpoyeeContextProvider>
    
  )
}

export default App
