import { createContext, useState } from 'react';
import adminIcon from '../assets/admin.png';

export const EmployeesContext = createContext({ // fix this
  employeesList: [{
    name: 'D'
  }],
  addEmployeeToList: () => {}
});

export default function EmployeesContextProvider({ children }) {
//   const [employeesList, setEmployeesList] = useState([]); // RETURN THIS
const [employeesList, setEmployeesList] = useState([
  {
    email: 'palavinskaite.dovile@gmail.com',
    id: 145,
    lastName: 'Pakalne',
    name: 'Dovile',
    phone: '+370 627 63215',
    position: 'Web developer',
    createdAt: new Date().toISOString(),
    department: 'Engineering',
    employment: 'Full-time',
    img: adminIcon
  },
   {
    email: 'dovile@gmail.com',
    id: 145555,
    lastName: 'Mazule',
    name: 'Edita',
    phone: '+370 625 76348',
    position: 'Designer',
    createdAt: new Date().toISOString(),
    department: 'Design',
    employment: 'Part-time',
    img: adminIcon
  },
  {
    email: 'dovile@gmail.com',
    id: 143555,
    lastName: 'Mazule',
    name: 'Edita',
    phone: '+370 625 76348',
    position: 'Designer',
    createdAt: new Date().toISOString(),
    department: 'Marketing',
    employment: 'Full-time',
    img: adminIcon  
  },
  {
    email: 'dovile@gmail.com',
    id: 136455,
    lastName: 'Mazule',
    name: 'Edita',
    phone: '+370 625 76348',
    position: 'Designer',
    createdAt: new Date().toISOString(),
    department: 'Administration',
    employment: 'Freelacing',
    img: adminIcon 
  }
]);

function addEmployeeToList(employeeData) {
    setEmployeesList(prevList => [
        ...prevList,
        { 
        id: Date.now(),
        createdAt: new Date().toISOString(),
        img: adminIcon, 
        ...employeeData
        }
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

const ctxValue = {
    employeesList,
    addEmployeeToList,
    updateEmployee
};

return (
    <EmployeesContext.Provider value={ctxValue}>
      {children}
    </EmployeesContext.Provider>
  );
}