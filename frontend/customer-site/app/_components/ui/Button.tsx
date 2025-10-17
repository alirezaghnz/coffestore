type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 text-white rounded-full text-sm bg-coffee-500 hover:bg-coffee-600 transition"
    >
      {children}
    </button>
  );
}
