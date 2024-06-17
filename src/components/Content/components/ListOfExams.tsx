import { TestContent } from '@/constants/testContent';
import { Mode } from '@/constants/sidebuttons';

interface ListOfExamsProps {
  examContent: TestContent[];
  setExamContent: (value: TestContent) => void;
  setMode: (mode: Mode) => void;
}

function pickColour(level: 'Fácil' | 'Médio' | 'Difícil') {
  switch (level) {
    case 'Fácil':
      return '#31C456';
    case 'Médio':
      return '#FBCB23';
    case 'Difícil':
      return '#E74C3C';
    default:
      return '#31C456';
  }
}

export default function ListOfExams({ examContent, setExamContent, setMode }: ListOfExamsProps) {
  const handleClick = (content: TestContent) => {
    setExamContent(content);
    setMode('exam');
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl mt-8 text-primary">Lista de provas</h2>
        <hr className="border-primary border mb-4 mt-2" />
      </div>

      <div
        className="custom-scrollbar flex flex-col gap-2 p-4 md:overflow-auto"
        style={{ maxHeight: 'calc(100vh - 24rem)' }}
      >
        {examContent.map((content: TestContent) => (
          <div
            key={content.id}
            className="p-4 grid grid-cols-12 cursor-pointer hover:bg-gray-400"
            onClick={() => handleClick(content)}
          >
            <div
              className={`col-span-1 rounded-lg w-1/3`}
              style={{ backgroundColor: pickColour(content.level) }}
            />

            <div className="col-span-3">
              <h3 className="text-2xl text-primary font-bold">Data da prova</h3>
              <p className="text-xl text-secondary font-bold">{content.date}</p>
            </div>

            <div className="col-span-3">
              <h3 className="text-2xl text-primary font-bold">Turma</h3>
              <p className="text-xl text-secondary font-bold">{content.class}</p>
            </div>

            <div className="col-span-3">
              <h3 className="text-2xl text-primary font-bold">Conteúdo</h3>
              <p className="text-xl text-secondary font-bold">{content.content}</p>
            </div>
            <div className="col-span-2">
              <h3 className="text-2xl text-primary font-bold">Status</h3>
              <p className="text-xl text-secondary font-bold">{content.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
