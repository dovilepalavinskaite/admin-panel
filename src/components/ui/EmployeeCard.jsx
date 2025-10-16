import { CiMail, CiClock1 } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { PiPhoneCall } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";

function InfoRow({ icon: Icon, text, className = "" }) {
  return (
    <div className={`flex items-start gap-2 break-words ${className}`}>
      <Icon className="shrink-0 mt-0.5 text-base sm:text-lg" />
      <span className="break-words overflow-hidden text-ellipsis text-xs sm:text-sm">
        {text}
      </span>
    </div>
  );
}

export default function EmployeeCard({ employee, onViewEmployee, showFooter = true }) {
  const formattedDate = new Date(employee.createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col bg-stone-200 p-5 rounded-xl shadow-2xl hover:shadow-[0_10px_25px_rgba(0,0,0,0.7)] transition w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <img
          src={employee.img}
          alt={`${employee.name} ${employee.lastName}`}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4"
        />
        <p className="text-amber-500 font-bold text-sm sm:text-lg break-words">
          {employee.name} {employee.lastName}
        </p>
        <p className="text-stone-600 text-xs sm:text-sm break-words">
          {employee.position}
        </p>
      </div>

      {/* Details */}
      <div className="bg-stone-300 p-3 sm:p-4 rounded mt-3 sm:mt-4 text-stone-900 text-xs sm:text-sm space-y-2 w-full">
        <InfoRow icon={CiMail} text={employee.email} />

        <div className="flex flex-wrap justify-center sm:justify-between gap-2">
          <InfoRow icon={RiGroupLine} text={employee.department} />
          <InfoRow icon={CiClock1} text={employee.employment} />
        </div>

        <InfoRow icon={PiPhoneCall} text={employee.phone} />
      </div>

      {/* Footer */}
      {showFooter && <div className="flex flex-wrap justify-between items-center mt-4 text-stone-600 text-xs sm:text-sm gap-y-1">
        <p className="whitespace-nowrap">Joined: {formattedDate}</p>
        <button 
          onClick={onViewEmployee}
          className="flex items-center gap-1 text-sky-800 hover:text-sky-900 font-medium transition cursor-pointer"
          >
          <span>Edit User</span>
          <MdKeyboardArrowRight className="w-5 h-5" />
        </button>
      </div>}
    </div>
  );
}