import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';

export default function QuestionsDB() {
  return (
    <div>
      <HeaderTitle
        title="Banco de questões"
        description="Veja quais questões estão disponíveis para uso!"
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
      />
    </div>
  );
}
