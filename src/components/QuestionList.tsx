import React from 'react';
import { Questions } from '@/constants/testContent';
import Modal from '@/components/Modal';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface QuestionListProps {
  level: string;
  color: string;
  questions: Questions[];
  truncateText: (text: string, maxLength: number) => string;
}

const QuestionList: React.FC<QuestionListProps> = ({ level, color, questions, truncateText }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [grade, setGrade] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGrade(parseFloat(e.target.value));
  };

  const handleSave = () => {
    onClose();
    toast.success('Nota salva com sucesso!');
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3
          className={`text-xl border text-white ${color} border-${color} p-2 rounded text-center`}
        >
          {level}
        </h3>

        {questions.map((item) => (
          <div key={item.id} className="border border-primary rounded p-2 flex flex-col gap-2">
            <h3 className="text-xl text-primary font-bold">Enunciado</h3>
            <p>{truncateText(item.question, 25)}</p>
            <div className="flex justify-between">
              <h3 className="text-xl text-primary font-bold items-center mt-2">
                Valor
                <span className="text-md font-normal text-secondary"> {item.value.toFixed(1)}</span>
              </h3>
              <button
                type="button"
                className="bg-primary text-white p-1 rounded"
                onClick={() => {
                  onOpen();
                  setGrade(item.value);
                }}
              >
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Modal isOpen={isOpen} onClose={onClose} title="Editar a questão">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                className="border border-primary p-2 rounded"
                placeholder="Nota do aluno"
                id="grade"
                value={grade}
                onChange={handleChange}
              />
              <button
                type="button"
                className="bg-primary text-white p-2 rounded"
                onClick={handleSave}
              >
                Salvar
              </button>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default QuestionList;
