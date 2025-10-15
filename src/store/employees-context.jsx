import { createContext, useState } from 'react';

export const EmployeesContext = createContext({
  employeesList: [],
  addEmployeeToList: () => {}
});

export default function EmployeesContextProvider({ children }) {
  const [employeesList, setEmployeesList] = useState([]);


 function addEmployeeToList(employeeData) {
    setEmployeesList(prevList => [
        ...prevList,
        { 
        id: Date.now(),
        ...employeeData
        }
    ]);
    }

  const ctxValue = {
    employeesList,
    addEmployeeToList
  };

  return (
    <EmployeesContext.Provider value={ctxValue}>
      {children}
    </EmployeesContext.Provider>
  );
}