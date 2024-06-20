import Image from 'next/image';
import FlaviaImg from '@/assets/image.png';
import { Mode } from '@/constants/sidebuttons';

interface FooterProps {
  setMode: (value: Mode) => void;
}

export default function Footer({ setMode }: FooterProps) {
  return (
    <button className="flex gap-4 m-8 items-center" onClick={() => setMode('profile')}>
      <Image src={FlaviaImg} alt="Flávia" width={100} height={100} />
      <p className="text-2xl">Flávia</p>
    </button>
  );
}
