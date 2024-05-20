import DetailImage from '@/assets/plantinhaa-Photoroom_prev_ui (1).png';
import Image from 'next/image';
import { ExamContent } from '@/constants/examContent';

function truncateText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}

export default function CardExam(props: ExamContent) {
  return (
    <div className="pb-10 rounded-lg" style={{ backgroundColor: props.color }}>
      <div className="flex flex-col justify-between p-4 bg-white h-[16rem] relative rounded-lg text-black">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-4xl" style={{ color: props.color }}>
              {props.level}
            </h1>
            <p>{truncateText(props.description, 100)}</p>
          </div>

          <div className="flex flex-col gap-2 text-center">
            <button
              type="button"
              className="bg-secondary text-white p-2 border-[3px] rounded-lg border-white hover:bg-primary"
            >
              Selecionar
            </button>

            <button className="text-[12px] text-primary hover:text-secondary">
              Estatisticas da questão
            </button>

            {props.hasImage && <p className="text-[12px]">Contém imagem</p>}
          </div>
        </div>

        <div>
          <button
            type="button"
            className="bg-transparent p-2 border-[3px] rounded-lg border-secondary hover:bg-secondary hover:text-white text-[12px]"
          >
            Ver mais
          </button>
        </div>

        <div className="absolute bottom-0 right-0">
          <Image src={DetailImage} alt="Detalhes" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
