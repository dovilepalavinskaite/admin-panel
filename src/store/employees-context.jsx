import { createContext, useState } from 'react';
import adminIcon from '../assets/admin.png';

export const EmployeesContext = createContext({
  employeesList: [],
  addEmployeeToList: () => {},
  updateEmployee: () => {},
  deleteEmployee: () => {},
});

export default function EmployeesContextProvider({ children }) {
  const [employeesList, setEmployeesList] = useState([]);

  function addEmployeeToList(employeeData) {
    setEmployeesList((prevList) => [
      ...prevList,
      {
        id: Date.now(),
        createdAt: new Date().toISOString(),
        img: adminIcon,
        ...employeeData,
      },
    ]);
  }

  function updateEmployee(updatedEmployee) {
    setEmployeesList((prevList) =>
      prevList.map((employee) =>
        employee.id === updatedEmployee.id
          ? { ...employee, ...updatedEmployee }
          : employee
      )
    );
  }

  function deleteEmployee(id) {
    setEmployeesList((prevList) =>
      prevList.filter((employee) => employee.id !== id)
    );
  }

  const ctxValue = {
    employeesList,
    addEmployeeToList,
    updateEmployee,
    deleteEmployee,
  };

  return (
    <EmployeesContext.Provider value={ctxValue}>
      {children}
    </EmployeesContext.Provider>
  );
}