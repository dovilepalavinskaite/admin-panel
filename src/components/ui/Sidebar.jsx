import TextButton from './TextButton';
import adminIcon from '../../assets/admin.png';
import { FaRegAddressCard } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

export default function Sidebar({ onAddNewEmployee, onViewAllEmployees }) {
  return (
    <div className="w-1/7 h-screen bg-gray-400 p-4 rounded-sm flex flex-col items-center">
        <img
            src={adminIcon}
            alt="Admin icon"
            className="w-[80px] h-[80px] rounded-full mb-4"
        />
        <p className="text-amber-800 font-bold mb-5">Welcome, John Doe!</p>
        <TextButton 
            handleButton={onAddNewEmployee}
            icon={IoMdAdd}
            buttonText="Add employee"
        />
        <TextButton 
            handleButton={onViewAllEmployees}
            icon={FaRegAddressCard}
            buttonText="View all employees"
        />
    </div>
  );
}