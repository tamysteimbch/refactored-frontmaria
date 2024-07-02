import { useAppSelector } from '@/lib/hooks';

export default function Title() {
  const user = useAppSelector((state) => state).me.me;
  return (
    <div className="flex flex-col gap-2 text-center mt-12">
      <h1 className="text-[3rem]">Maria</h1>
      <p className="text-[#999999] text-sm mb-8">{`Bem vinda, professor(a) ${user.name}`}</p>
    </div>
  );
}
