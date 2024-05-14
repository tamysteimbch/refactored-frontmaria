import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';
import { Mode } from '@/constants/sidebuttons';

interface QuestionsDBProps {
  setMode: (value: Mode) => void;
}

export default function QuestionsDB({ setMode }: QuestionsDBProps) {
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
