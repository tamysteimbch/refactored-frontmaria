import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';
import examContent from '@/constants/testContent';
import ListOfExams from './components/ListOfExams';

export default function ExamList() {
  return (
    <div>
      <HeaderTitle
        title="Provas"
        description={`Total de ${examContent.length} provas`}
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
      />

      <ListOfExams examContent={examContent} />
    </div>
  );
}
