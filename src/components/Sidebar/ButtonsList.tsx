import sideButtons from '@/constants/sidebuttons';
import ButtonWithIcon from '../ButtonWithIcon';
import { Mode } from '@/constants/sidebuttons';

interface ButtonsListProps {
  setMode: (value: Mode) => void;
}

export default function ButtonsList({ setMode }: ButtonsListProps) {
  return (
    <div className="flex flex-col gap-4">
      {sideButtons.map((button) => (
        <ButtonWithIcon key={button.title} icon={button.icon} onClick={() => setMode(button.mode)}>
          {button.title}
        </ButtonWithIcon>
      ))}
    </div>
  );
}
