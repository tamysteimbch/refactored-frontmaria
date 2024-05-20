import { FaPlus } from 'react-icons/fa';
import { Mode } from '@/constants/sidebuttons';

interface CreateExamBtnProps {
  setMode: (value: Mode) => void;
}

export default function CreateExamBtn({ setMode }: CreateExamBtnProps) {
  return (
    <>
      <button
        className="grid grid-cols-[auto,1fr] bg-secondary p-4 rounded-lg gap-4 w-4/6 mx-auto hover:bg-tertiary items-center"
        onClick={() => setMode('newExam')}
      >
        <div className="text-xl">
          <FaPlus />
        </div>
        <div className="text-md text-center">{'Criar nova prova'}</div>
      </button>
    </>
  );
}
