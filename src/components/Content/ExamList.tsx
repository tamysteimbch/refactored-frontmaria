import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';
import { Mode } from '@/constants/sidebuttons';

interface ExamListProps {
  setMode: (value: Mode) => void;
}

export default function ExamList({ setMode }: ExamListProps) {
  return (
    <div>
      <HeaderTitle
        title="Banco de questões"
        description="Veja quais questões estão disponíveis para uso!"
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
        setMode={setMode}
      />
    </div>
  );
}
