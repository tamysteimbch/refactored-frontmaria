import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';

export default function ExamList() {
  return (
    <div>
      <HeaderTitle
        title="Provas"
        description="Total 10 provas"
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
      />
    </div>
  );
}
