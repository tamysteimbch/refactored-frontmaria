import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';
import Cards from './components/Cards';
import examContent from '@/constants/examContent';

export default function NewExam() {
  return (
    <div>
      <HeaderTitle
        title="Criar nova prova"
        description={`Total ${examContent.length} Provas`}
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
      />

      <Cards examContent={examContent} />

      <div className="flex justify-between px-12 items-center mt-6">
        <button className="border-[3px] hover:text-white hover:bg-primary bg-transparent border-primary text-primary rounded-lg p-2">
          Cancelar seleção
        </button>
        <div className="flex items-center gap-4">
          <button className="border-[3px] bg-transparent hover:text-white hover:bg-[#FF1800] border-[#FF1800] text-[#FF1800] rounded-lg p-2">
            Cancelar
          </button>
          <button className="border-[3px] border-[#31C456] hover:bg-[#2e8143] hover:border-[#2e8143] bg-[#31C456] text-white rounded-lg p-2">
            Gerar prova
          </button>
        </div>
      </div>
    </div>
  );
}
