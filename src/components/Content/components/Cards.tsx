import Card from './Card';
import CardExam from './CardExam';
import { CardContent } from '@/constants/cardContent';
import { Mode } from '@/constants/sidebuttons';
import { Questions } from '@/app/api/types/questions.types';

interface CardsProps {
  cardContent?: CardContent[];
  examContent?: Questions[];
  setSelecteds?: (selecteds: string[]) => void;
  selecteds?: string[];
  mode?: Mode;
}

export default function Cards({
  cardContent,
  examContent,
  setSelecteds,
  selecteds,
  mode,
}: CardsProps) {
  return (
    <div
      className="custom-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-8 p-4 md:overflow-auto"
      style={{ maxHeight: 'calc(100vh - 24rem)' }}
    >
      {cardContent && cardContent.map((card: CardContent) => <Card key={card.title} {...card} />)}

      {examContent &&
        examContent.map((card: Questions) => (
          <CardExam
            key={card._id}
            setSelecteds={setSelecteds}
            selecteds={selecteds}
            {...card}
            hasSelected={mode === 'question' ? true : false}
            isDb={mode === 'question' ? true : false}
          />
        ))}
    </div>
  );
}
