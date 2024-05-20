import Card from './Card';
import CardExam from './CardExam';
import { CardContent } from '@/constants/cardContent';
import { ExamContent } from '@/constants/examContent';

interface CardsProps {
  cardContent?: CardContent[];
  examContent?: ExamContent[];
}

export default function Cards({ cardContent, examContent }: CardsProps) {
  return (
    <div
      className="custom-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-24 p-4 md:overflow-auto"
      style={{ maxHeight: 'calc(100vh - 24rem)' }}
    >
      {cardContent && cardContent.map((card: CardContent) => <Card key={card.title} {...card} />)}

      {examContent &&
        examContent.map((card: ExamContent, index) => (
          <CardExam key={card.level + index} {...card} />
        ))}
    </div>
  );
}
