import Image from 'next/image';
import FlaviaImg from '@/assets/image.png';
import { Mode } from '@/constants/sidebuttons';
import { useAppSelector } from '@/lib/hooks';
interface FooterProps {
  setMode: (value: Mode) => void;
}

export default function Footer({ setMode }: FooterProps) {
  const user = useAppSelector((state) => state).me.me;
  return (
    <button className="flex gap-4 m-8 items-center" onClick={() => setMode('profile')}>
      <Image src={FlaviaImg} alt="Flávia" width={100} height={100} />
      <p className="text-2xl">{user.name}</p>
    </button>
  );
}
