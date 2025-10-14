import { createContext, useState } from 'react';

export const EmpoyeesContext = createContext({
    employeesListlist: []
})

export default function EmpoyeeContextProvider({ children }) {
    const [employeesList, setEmployeesList] = useState({
        employeesListlist: []
    })

    const ctxValue = {
        employeesListlist: employeesList.list
    }

    return <EmpoyeesContext.Provider value={ctxValue}>
        { children }
    </EmpoyeesContext.Provider>
}