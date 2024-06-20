import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';
import examContent from '@/constants/testContent';
import ListOfExams from './components/ListOfExams';
import { TestContent } from '@/constants/testContent';
import { Mode } from '@/constants/sidebuttons';

interface ExamListProps {
  setExamContent: (value: TestContent) => void;
  setMode: (mode: Mode) => void;
}

export default function ExamList({ setExamContent, setMode }: ExamListProps) {
  return (
    <div>
      <HeaderTitle
        title="Provas"
        description={`Total de ${examContent.length} provas`}
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
      />

      <ListOfExams examContent={examContent} setExamContent={setExamContent} setMode={setMode} />
    </div>
  );
}
