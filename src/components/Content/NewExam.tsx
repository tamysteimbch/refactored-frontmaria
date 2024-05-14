import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';

export default function NewExam() {
  return (
    <div>
      <HeaderTitle
        title="Provas"
        description="Total 10 Provas"
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
      />
    </div>
  );
}
