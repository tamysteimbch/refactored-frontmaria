import { TestContent } from '@/constants/testContent';
import HeaderTitle from './components/HeaderTitle';
import { FaPlus } from 'react-icons/fa';
import ExamItem from './components/ExamItem';
import Image from 'next/image';
import decoracao from '@/assets/decoracao.png';
import QuestionList from '../QuestionList';

interface ExamProps {
  examContent: TestContent;
}

export default function Exam({ examContent }: ExamProps) {
  function truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }

  const levels = [
    { level: 'Fácil', color: 'bg-[#31C456]' },
    { level: 'Médio', color: 'bg-[#FBCB23]' },
    { level: 'Difícil', color: 'bg-[#E74C3C]' },
  ];

  return (
    <div>
      <HeaderTitle
        title="Prova"
        description={`Revise ou edite as configuraçōes das provas`}
        buttonIcon={<FaPlus />}
        buttonTitle="Adicionar nova questão"
      />

      <h2 className="mt-12 text-3xl text-primary">Informaçōes da prova</h2>

      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
        <ExamItem description={examContent.date} title="Data da prova" />
        <ExamItem description={examContent.level} title="Dificuldade" />
        <ExamItem description={examContent.class} title="Turma" />
        <ExamItem description={examContent.content} title="Conteúdo" />
        <ExamItem description={examContent.subject} title="Matėria" />
      </div>

      <hr className="mt-12 mb-12 border-primary" />

      <div
        className="custom-scrollbar gap-4 mt-8 p-4 md:overflow-auto"
        style={{ maxHeight: 'calc(100vh - 38rem)' }}
      >
        <div className="flex">
          <div className="hidden md:block w-[30%]">
            <Image src={decoracao} alt="decoração" />
          </div>
          <div className="w-full md:w-[70%] md:px-4 p-0">
            <h2 className="text-3xl text-primary">Questōes selecionadas </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-12">
              {levels.map(({ level, color }) => (
                <QuestionList
                  key={level}
                  level={level}
                  color={color}
                  questions={examContent.questions.filter((item) => item.level === level)}
                  truncateText={truncateText}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
