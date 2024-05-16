import Card from './Card';
import { CardContent } from '@/constants/cardContent';
import cardContent from '@/constants/cardContent';

export default function Cards() {
  return (
    <div
      className="custom-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-24 p-4 md:overflow-auto"
      style={{ maxHeight: 'calc(100vh - 24rem)' }}
    >
      {cardContent.map((card: CardContent) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          color={card.color}
        />
      ))}
    </div>
  );
}
