import { useContext } from 'react';
import EmployeeCard from './ui/EmployeeCard';
import { EmployeesContext } from '../store/employees-context.jsx';

export default function AllEmployees({ onViewEmployee }) {
  const { employeesList } = useContext(EmployeesContext);

  return (
    <div className="p-16">
      <h2 className="mb-8 text-2xl font-semibold text-stone-300">
        All Employees
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {employeesList.map(employee => (
            <EmployeeCard 
              key={employee.id} 
              employee={employee} 
              onViewEmployee={() => {onViewEmployee(employee.id)}} 
            />
        ))}
        </div>
    </div>
  );
}