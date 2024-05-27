import DetailImage from '@/assets/imgHomepage.svg';
import Image from 'next/image';
import { CardContent } from '@/constants/cardContent';

export default function Card(props: CardContent) {
  return (
    <div
      className="flex flex-col justify-between p-4 h-[16rem] relative rounded-lg text-white cursor-pointer"
      style={{ backgroundColor: props.color }}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-4xl">{props.title}</h1>
          <p>{props.description}</p>
        </div>

        <button
          type="button"
          className="bg-transparent p-2 border-[3px] rounded-lg border-white hover:bg-white hover:text-black"
        >
          Ver mais
        </button>
      </div>

      <div className="absolute bottom-0 right-0">
        <Image src={DetailImage} alt="Detalhes" width={200} height={100} />
      </div>
    </div>
  );
}
