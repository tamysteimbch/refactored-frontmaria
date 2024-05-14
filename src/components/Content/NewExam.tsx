import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';
import { Mode } from '@/constants/sidebuttons';

interface NewExamProps {
  setMode: (value: Mode) => void;
}

export default function NewExam({ setMode }: NewExamProps) {
  return (
    <div>
      <HeaderTitle
        title="Criar nova prova"
        description="Selecione as questões disponíveis abaixo"
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
        setMode={setMode}
      />
    </div>
  );
}
