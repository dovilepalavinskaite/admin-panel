export default function SuccessMessage({ message }) {
  return (
    <div className="p-3 mt-5 w-1/4 rounded-xl text-center text-amber-400 border-2 border-amber-400 animate-fade-in">
      <p>{message}</p>
    </div>
  );
}