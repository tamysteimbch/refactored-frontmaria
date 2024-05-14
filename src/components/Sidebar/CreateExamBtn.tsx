import { FaPlus } from 'react-icons/fa';

export default function CreateExamBtn() {
  return (
    <button className="grid grid-cols-[auto,1fr] bg-secondary p-4 rounded-lg gap-4 w-4/6 mx-auto hover:bg-tertiary items-center">
      <div className="text-xl">
        <FaPlus />
      </div>
      <div className="text-md text-center">{'Criar nova prova'}</div>
    </button>
  );
}
