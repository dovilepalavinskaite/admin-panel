import adminIcon from '../assets/admin.png';

export default function Sidebar({ onAddNewEmployee }) {
  return (
    <div className="w-1/5 h-screen bg-gray-400 p-4 rounded-sm flex flex-col items-center">
        <img
            src={adminIcon}
            alt="Admin icon"
            className="w-[80px] h-[80px] rounded-full mb-4"
        />
        <p className="text-stone-700 font-medium text-lg">Welcome, John Doe!</p>
        <button 
            onClick={onAddNewEmployee}
            className="text-stone-50 hover:text-stone-700 cursor-pointer"
        >
            + Add employee
        </button>
    </div>
  );
}