import { Mode } from '@/constants/sidebuttons';

interface HeaderTitleProps {
  title: string;
  description: string;
  buttonTitle: string;
  buttonIcon: React.ReactNode;
  setMode: (value: Mode) => void;
}

export default function HeaderTitle({
  title,
  description,
  buttonTitle,
  buttonIcon,
  setMode,
}: HeaderTitleProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-4">
        <p className="text-[3rem] text-primary">{title}</p>
        <p className="text-lg text-tertiary">{description}</p>
      </div>

      <button
        className="flex justify-between items-center gap-4 bg-secondary hover:bg-tertiary text-white p-2 rounded-lg"
        onClick={() => setMode('newExam')}
      >
        <p>{buttonIcon}</p>
        <p>{buttonTitle}</p>
      </button>
    </div>
  );
}
