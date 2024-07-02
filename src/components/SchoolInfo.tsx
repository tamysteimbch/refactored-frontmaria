import Image from 'next/image';
import decoracao from '@/assets/decoracao.png';
import { getSchool } from '@/app/api/teacher';
import { useAppSelector } from '@/lib/hooks';

export default function SchoolInfo() {
  const { school } = useAppSelector((state) => state).school;

  return (
    <div className="flex">
      <div className="hidden md:block w-[30%]">
        <Image src={decoracao} alt="decoração" />
      </div>
      <div className="w-full md:w-[70%] md:px-4 p-0">
        <h2 className="text-primary text-3xl">Informações escolares</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div className="flex flex-col gap-2 justify-start items-start">
            <h2 className="text-primary font-bold text-2xl">Nome da instituição</h2>
            <h2 className="text-secondary font-bold text-xl">{school.name}</h2>
          </div>

          <div className="flex flex-col gap-2 justify-start items-start">
            <h2 className="text-primary font-bold text-2xl">Telefone</h2>
            <h2 className="text-secondary font-bold text-xl">{school.phone}</h2>
          </div>

          <div className="flex flex-col gap-2 justify-start items-start col-span-2">
            <h2 className="text-primary font-bold text-2xl">Endereço</h2>
            <h2 className="text-secondary font-bold text-xl">{school.address}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
