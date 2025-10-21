import { useState } from "react";
import TextButton from "./TextButton";
import adminIcon from "../../assets/admin.png";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Sidebar({ onAddNewEmployee, onViewAllEmployees }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Burger Icon for small screens */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 text-white bg-gray-800 rounded-md shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <HiOutlineMenu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen bg-gray-800 text-white shadow-lg
          w-64 md:w-1/5 p-6 flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out
          z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:block
        `}
      >
        {/* Close button on small screens */}
        <button
          className="self-end mb-4 md:hidden p-1 text-white"
          onClick={() => setIsOpen(false)}
        >
          <IoClose className="w-6 h-6" />
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={adminIcon}
            alt="Admin icon"
            className="w-16 h-16 rounded-full border-2 border-amber-400"
          />
          <p className="text-amber-300 font-medium text-base text-center">
            John Doe
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          <TextButton
            handleButton={onAddNewEmployee}
            icon={IoMdAdd}
            buttonText="Add"
            textClass="text-base"
            iconClass="w-6 h-6"
          />
          <TextButton
            handleButton={onViewAllEmployees}
            icon={FaRegAddressCard}
            buttonText="View All"
            textClass="text-base"
            iconClass="w-6 h-6"
          />
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}