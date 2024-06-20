import HeaderTitle from './Content/components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';
import ProfileInfo from './ProfileInfo';
import SchoolInfo from './SchoolInfo';

export default function Profile() {
  return (
    <div>
      <HeaderTitle
        title="Minha conta"
        description={`Atualize as informações da sua conta!`}
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
      />

      <ProfileInfo />
      <hr className="border mt-12 mb-12 border-primary" />
      <SchoolInfo />
    </div>
  );
}
