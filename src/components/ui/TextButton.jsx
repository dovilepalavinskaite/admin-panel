export default function TextButton({ handleButton, icon: Icon, buttonText }) {
  return (
    <button 
      onClick={handleButton}
      className="flex items-center gap-2 text-stone-50 text-md hover:text-amber-400 cursor-pointer transition mb-5"
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{buttonText}</span>
    </button>
  );
}