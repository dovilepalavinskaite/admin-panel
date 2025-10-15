import { useContext, useState } from 'react'
import './App.css'
import Login from './components/Login.jsx';
import Sidebar from './components/Sidebar.jsx';
import NoEmployeesTemplate from './components/NoEmployeesTemplate.jsx';
import EmpoyeeContextProvider from '../src/store/employees-context.jsx';
import { EmployeesContext } from '../src/store/employees-context.jsx';
import NewEmployee from './components/NewEmployee.jsx';

function App() {
  const [isUserLoggedIn, setLogin] = useState(true)
  const [isWrongCredentials, SetWrongCredentials] = useState(false)
  const [showNewEmployee, setShowNewEmployee] = useState(false);
  const { employeesList } = useContext(EmployeesContext)

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
            <Sidebar onAddNewEmployee={() => setShowNewEmployee(true)} />
            <div className="flex-1">
              {showNewEmployee ? (
                <NewEmployee />
              ) : employeesList.length === 0 ? (
                <NoEmployeesTemplate onAddNewEmployee={() => setShowNewEmployee(true)} />
              ) : null}
            </div>
          </>
        )}
      </div>
    </EmpoyeeContextProvider>
  );
}

export default App
