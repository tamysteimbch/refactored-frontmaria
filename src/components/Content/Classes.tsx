import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';

export default function Classes() {
  return (
    <div>
      <HeaderTitle
        title="Turmas"
        description="6 turmas para o ano de 2024"
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
      />
    </div>
  );
}
