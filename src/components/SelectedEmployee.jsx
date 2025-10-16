import { useContext, useState } from 'react';
import { EmployeesContext } from '../store/employees-context.jsx'
import EmployeeCard from './ui/EmployeeCard.jsx';
import EditEmployee from './EditEmployee.jsx';

export default function SelectedEmployee({ employeeId, onCancelEdit }) {
    const { employeesList } = useContext(EmployeesContext);
    const employee = employeesList.find(emp => emp.id === employeeId);

    if (!employee) return <p>Employee not found</p>;

    return (
        <div className="p-5">
            <div className="flex flex-row items-start gap-6">
                <EmployeeCard 
                    key={employee.id} 
                    employee={employee} 
                    showFooter={false}
                />
                <div className="flex-1">
                    <EditEmployee 
                        employeeId={employee.id} 
                        onCancel={onCancelEdit} 
                    />
                </div>
            </div>
        </div>
    )
}