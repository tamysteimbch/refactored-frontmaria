interface GridItemProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function GridItem({ label, children, className }: GridItemProps) {
  return (
    <div className={`w-full text-center text-xl text-tertiary mt-2 mb-2 ${className}`}>
      <label className="text-[#707070]" htmlFor="prova">
        {label}
      </label>
      {children}
    </div>
  );
}
