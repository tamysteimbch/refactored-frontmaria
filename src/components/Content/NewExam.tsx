import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';
import Cards from './components/Cards';
import examContent from '@/constants/examContent';
import { useState } from 'react';
import { Mode } from '@/constants/sidebuttons';

interface ExamContent {
  setMode: (mode: Mode) => void;
}

export default function NewExam({ setMode }: ExamContent) {
  const [selecteds, setSelecteds] = useState<number[]>([]);

  return (
    <div>
      <HeaderTitle
        title="Criar nova prova"
        description={`Total ${examContent.length} Provas`}
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
      />

      <Cards examContent={examContent} setSelecteds={setSelecteds} selecteds={selecteds} />

      <div className="flex justify-between px-12 items-center mt-6">
        <button
          className={`border-[3px] ${
            selecteds.length === 0
              ? 'bg-gray-200 text-gray-500 border-gray-200 cursor-not-allowed'
              : 'hover:text-white hover:bg-primary bg-transparent border-primary text-primary'
          } rounded-lg p-2`}
          disabled={selecteds.length === 0}
        >
          Cancelar seleção
        </button>
        <div className="flex items-center gap-4">
          <button
            className="border-[3px] bg-transparent hover:text-white hover:bg-[#FF1800] border-[#FF1800] text-[#FF1800] rounded-lg p-2"
            onClick={() => setMode('class')}
          >
            Cancelar
          </button>
          <button
            className={`border-[3px] ${
              selecteds.length === 0
                ? 'bg-gray-200 text-gray-500 border-gray-200 cursor-not-allowed'
                : 'bg-[#31C456] border-[#31C456] text-white hover:bg-[#2e8143] hover:border-[#2e8143]'
            } rounded-lg p-2`}
            disabled={selecteds.length === 0}
          >
            Gerar prova
          </button>
        </div>
      </div>
    </div>
  );
}
