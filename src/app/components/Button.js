export default function Button({ text, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FECC2B] px-7 py-2 rounded-full font-robotocondensed font-semibold text-[#0C326F] ${className}`}
    >
      {text}
    </button>
  );
}
