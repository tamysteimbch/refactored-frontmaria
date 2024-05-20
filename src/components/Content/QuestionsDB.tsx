/* eslint-disable react-hooks/exhaustive-deps */
import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';
import Cards from './components/Cards';
import examContent, { ExamContent } from '@/constants/examContent';
import { useState, useEffect } from 'react';
import { Mode } from '@/constants/sidebuttons';

interface QuestionsDBProps {
  setMode: (mode: Mode) => void;
}

export default function QuestionsDB({ setMode }: QuestionsDBProps) {
  const [selecteds, setSelecteds] = useState<number[]>([]);
  const [filteredExamContent, setFilteredExamContent] = useState<ExamContent[]>(examContent);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedImageFilter, setSelectedImageFilter] = useState<string>('all');

  useEffect(() => {
    filterExamContent();
  }, [selectedLevel, selectedImageFilter]);

  const filterExamContent = () => {
    let filteredContent = examContent;

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
        title="Banco de questões"
        description="Veja quais questões estão disponíveis para uso!"
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
    </div>
  );
}
