import { useState, useContext } from 'react';
import { EmployeesContext } from '../store/employees-context';
import { IoIosPersonAdd } from 'react-icons/io';
import FormField from './FormField';
import SuccessMessage from './SuccessMessage';

export default function NewEmployee() {
    const [employeeData, setEmployeeData] = useState({
        name: '',
        lastName: '',
        position: '',
        email: '',
        phone: ''
    });
    const { addEmployeeToList } = useContext(EmployeesContext);
    const [successMessage, setSuccessMessage] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setEmployeeData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addEmployeeToList(employeeData);
        setEmployeeData({ name: '', lastName: '', position: '', email: '', phone: '' });
        setSuccessMessage(true);
        setTimeout(() => setSuccessMessage(false), 3000);
    }

    function handleCancelAddEmployee(e) {
        e.preventDefault();
        setEmployeeData({ name: '', lastName: '', position: '', email: '', phone: '' });
    }

    return (
        <div className="min-h-screen px-4 ml-7 mt-32">
            <div className="flex items-center gap-3 mb-10">
                <IoIosPersonAdd className="text-amber-400 w-8 h-8" />
                <h2 className="text-stone-300 text-2xl font-semibold">Add New Employee</h2>
            </div>

            <form
                onSubmit={handleSubmit} 
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-10 max-w-2xl"
            >
                <FormField 
                    label="First name" 
                    name="name" 
                    value={employeeData.name} 
                    onChange={handleChange} 
                />
                <FormField 
                    label="Last name" 
                    name="lastName" 
                    value={employeeData.lastName} 
                    onChange={handleChange} 
                />
                <div className="sm:col-span-2 my-4">
                    <FormField 
                        label="Job position" 
                        name="position" 
                        value={employeeData.position} 
                        onChange={handleChange} 
                    />
                </div>
                <FormField 
                    label="Email" 
                    name="email" 
                    value={employeeData.email} 
                    onChange={handleChange} 
                />
                <FormField 
                    label="Phone number" 
                    name="phone" 
                    value={employeeData.phone} 
                    onChange={handleChange} 
                />
                <div className="flex flex-col sm:flex-row gap-4 mt-16 w-full">
                    <button
                        type="submit"
                        className="flex-1 rounded-full px-3 py-2 bg-sky-800 text-stone-50 hover:bg-sky-900 hover:shadow-md transition duration-200 cursor-pointer"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={handleCancelAddEmployee}
                        className="flex-1 rounded-full px-3 py-2 border-2 border-sky-800 text-stone-50 hover:bg-sky-900 hover:shadow-md transition duration-200 cursor-pointer"
                    >
                        Cancel
                    </button>
                </div>
            </form>
            {successMessage && <SuccessMessage message="Employee successfully added!" />}
        </div>
    );
}