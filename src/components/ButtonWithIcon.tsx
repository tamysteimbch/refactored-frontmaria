interface ButtonWithIconProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function ButtonWithIcon({ icon, children, onClick }: ButtonWithIconProps) {
  return (
    <button
      className="grid grid-cols-[auto,1fr] gap-4 w-[60%] mx-auto p-2 rounded-lg hover:bg-tertiary items-center"
      onClick={onClick}
    >
      <div className="text-3xl text-left">{icon}</div>
      <div className="text-md text-left">{children}</div>
    </button>
  );
}
