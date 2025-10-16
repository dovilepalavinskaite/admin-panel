import emptyListImg from '../assets/no-task.png'

export default function NoEmployees({ onAddNewEmployee }) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <img 
                src={emptyListImg} 
                alt="Empty list image" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4" 
            />
            <p className="text-2xl sm:text-3xl md:text-4xl text-center">
                No employees added yet
            </p>
            <button
                onClick={onAddNewEmployee}
                className="rounded-full px-4 py-2 my-5 w-3/4 sm:w-1/3 md:w-1/5 bg-stone-800 text-stone-50 hover:bg-stone-700 hover:shadow-md transition duration-200 cursor-pointer"
            >
                + Add employee
            </button>
        </div>
    )
}