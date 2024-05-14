import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';

import { Mode } from '@/constants/sidebuttons';

interface ClassesProps {
  setMode: (value: Mode) => void;
}

export default function Classes({ setMode }: ClassesProps) {
  return (
    <div>
      <HeaderTitle
        title="Turmas"
        description="6 turmas para o ano de 2024"
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
        setMode={setMode}
      />
    </div>
  );
}
