/* eslint-disable react-hooks/exhaustive-deps */
import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';
import Cards from './components/Cards';
import examContent, { ExamContent } from '@/constants/examContent';
import { useState, useEffect } from 'react';
import { Mode } from '@/constants/sidebuttons';
import Modal from '../Modal';
import AddQuestion from '../ModalContents/AddNewExam';
import { useDisclosure } from '@chakra-ui/react';
import { Questions } from '@/app/api/types/questions.types';
import { useAppSelector } from '@/lib/hooks';

interface ExamContentProps {
  setMode: (mode: Mode) => void;
}

export default function NewExam({ setMode }: ExamContentProps) {
  const { questions } = useAppSelector((state) => state.questions);

  const [selecteds, setSelecteds] = useState<string[]>([]);
  const [filteredExamContent, setFilteredExamContent] = useState<Questions[]>(questions);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedImageFilter, setSelectedImageFilter] = useState<string>('all');
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    filterExamContent();
  }, [selectedLevel, selectedImageFilter]);

  const filterExamContent = () => {
    let filteredContent = questions;

    if (selectedLevel !== 'all') {
      filteredContent = filteredContent.filter((content) => content.level === selectedLevel);
    }

    if (selectedImageFilter !== 'all') {
      const booleanValue = selectedImageFilter === 'true';
      filteredContent = filteredContent.filter((content) => content.hasImage === booleanValue);
    }

    setFilteredExamContent(filteredContent);
  };

  return (
    <div>
      <HeaderTitle
        title="Criar nova prova"
        description={`Total ${examContent.length} Provas`}
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
      />

      <div className="flex items-center gap-4">
        <select
          className="border-[3px] rounded-lg p-2 mt-4"
          onChange={(e) => setSelectedLevel(e.target.value)}
          value={selectedLevel}
        >
          <option value="all">Todas as questões</option>
          <option value="Fácil">Fáceis</option>
          <option value="Médio">Médias</option>
          <option value="Difícil">Difíceis</option>
        </select>

        <select
          className="border-[3px] rounded-lg p-2 mt-4"
          onChange={(e) => setSelectedImageFilter(e.target.value)}
          value={selectedImageFilter}
        >
          <option value="all">Todas</option>
          <option value="true">Com Imagem</option>
          <option value="false">Sem Imagem</option>
        </select>
      </div>

      <Cards examContent={filteredExamContent} setSelecteds={setSelecteds} selecteds={selecteds} />

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
            onClick={onOpen}
          >
            Gerar prova
          </button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Adicionar nova prova"
        description="Aqui você pode gerar a sua prova, o gabarito (opcional) e salvá-la em sua conta!"
      >
        <AddQuestion />
      </Modal>
    </div>
  );
}
