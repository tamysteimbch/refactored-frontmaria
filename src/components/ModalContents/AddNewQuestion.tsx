import React, { useState, ChangeEvent } from 'react';
import { Input, Textarea, Button } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import GridItem from './components/GridItem';
import { Questions } from '@/app/api/types/questions.types';
import { createQuestion, getQuestions, updateQuestion } from '@/app/api/questions';
import axios, { AxiosError } from 'axios';
import { setQuestions } from '@/lib/features/me/questions';
import { useAppDispatch } from '@/lib/hooks';

interface AddNewQuestionProps {
  examContent?: Questions;
  isEdit?: boolean;
  onCloseEdit?: () => void;
}

export default function AddNewQuestion({ examContent, isEdit, onCloseEdit }: AddNewQuestionProps) {
  const initialData: Questions = {
    _id: '',
    level: 'Fácil',
    question: '',
    hasImage: false,
    color: '#31C456',
    alternatives: [],
    correctAnswer: 'A',
    value: 0,
  };

  const dispatch = useAppDispatch();

  const [data, setData] = useState<Questions>(examContent || initialData);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleAlternativeChange = (option: 'A' | 'B' | 'C' | 'D', text: string) => {
    const updatedAlternatives = data.alternatives.map((alt) =>
      alt.option === option ? { ...alt, text } : alt,
    );
    if (!updatedAlternatives.some((alt) => alt.option === option)) {
      updatedAlternatives.push({ option, text });
    }
    setData({ ...data, alternatives: updatedAlternatives });
  };

  const handleSubmit = async () => {
    if (isEdit && examContent) {
      try {
        await updateQuestion(data, data._id);
        const questions = await getQuestions();
        dispatch(setQuestions(questions));
        toast.success('Questão editada com sucesso');
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const err = error as AxiosError<{ message: string }>;
          toast.error(err.response?.data.message || 'Erro ao criar questão');
        } else {
          console.error('Unexpected error:', error);
          toast.error('An unexpected error occurred');
        }
      }
    } else {
      try {
        await createQuestion(data);
        const questions = await getQuestions();
        dispatch(setQuestions(questions));
        toast.success('Questão criada com sucesso');
        setData(initialData);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const err = error as AxiosError<{ message: string }>;
          toast.error(err.response?.data.message || 'Erro ao criar questão');
        } else {
          console.error('Unexpected error:', error);
          toast.error('An unexpected error occurred');
        }
      }
    }
    onCloseEdit && onCloseEdit();
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-center">
      <GridItem label="Enunciado" className="lg:col-span-3 md:col-span-3 col-span-3">
        <Textarea
          id="question"
          placeholder="Digite o enunciado da questão"
          size="md"
          onChange={handleChange}
          value={data.question}
        />
      </GridItem>

      <GridItem label="Dificuldade" className="col-span-3">
        <div className="flex justify-center items-center">
          {['Fácil', 'Médio', 'Difícil'].map((level) => (
            <Button
              key={level}
              colorScheme={data.level === level ? 'teal' : 'gray'}
              onClick={() =>
                setData({
                  ...data,
                  level: level as 'Fácil' | 'Médio' | 'Difícil',
                  color: level === 'Fácil' ? '#31C456' : level === 'Médio' ? '#FBCB23' : '#E74C3C',
                })
              }
            >
              {level}
            </Button>
          ))}
        </div>
      </GridItem>

      <GridItem label="Adicionar Alternativas" className="col-span-3">
        <div className="mt-5 grid grid-cols-2 gap-4">
          {['A', 'B', 'C', 'D'].map((option) => (
            <Input
              key={option}
              type="text"
              placeholder={`Alternativa ${option}`}
              value={data.alternatives.find((alt) => alt.option === option)?.text || ''}
              onChange={(e) =>
                handleAlternativeChange(option as 'A' | 'B' | 'C' | 'D', e.target.value)
              }
            />
          ))}
        </div>
      </GridItem>

      <GridItem label="Resposta Correta" className="col-span-3 md:col-span-2">
        <Input
          type="text"
          id="correctAnswer"
          placeholder="Digite a letra da resposta correta"
          onChange={handleChange}
          value={data.correctAnswer}
        />
      </GridItem>

      <GridItem label="Valor da questão" className="col-span-3 md:col-span-1">
        <Input
          type="number"
          id="value"
          placeholder="Digite o valor da questão"
          onChange={(e) => setData({ ...data, value: parseInt(e.target.value) })}
          value={data.value.toString()}
        />
      </GridItem>

      <div className="flex items-center justify-between col-span-3 gap-4 mt-8">
        <Button colorScheme="blue" onClick={handleSubmit}>
          {isEdit ? 'Editar questão' : 'Criar questão'}
        </Button>
      </div>
    </div>
  );
}
