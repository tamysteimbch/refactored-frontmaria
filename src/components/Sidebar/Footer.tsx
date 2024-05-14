import Image from 'next/image';
import FlaviaImg from '@/assets/image.png';

export default function Footer() {
  return (
    <button className="flex gap-4 m-8 items-center">
      <Image src={FlaviaImg} alt="Flávia" width={100} height={100} />
      <p className="text-2xl">Flávia</p>
    </button>
  );
}
