import axios from 'axios';
import { Questions, QuestionsBody } from './types/questions.types';

export async function getQuestions(): Promise<Questions[]> {
  const response = await axios.get<Questions[]>('http://localhost:4000/questions');
  return response.data;
}

export async function getQuestionsById(id: string): Promise<Questions> {
  const response = await axios.get<Questions>(`http://localhost:4000/questions/${id}`);
  return response.data;
}

export async function createQuestion(question: Questions): Promise<Questions> {
  const { _id, ...questionWithoutId } = question;

  console.log(questionWithoutId);

  const response = await axios.post<Questions>(
    'http://localhost:4000/questions',
    questionWithoutId,
  );
  return response.data;
}

export async function updateQuestion(question: Questions, id: string): Promise<Questions> {
  const { _id, ...questionWithoutId } = question;
  const response = await axios.patch<Questions>(
    `http://localhost:4000/questions/${id}`,
    questionWithoutId,
  );
  return response.data;
}

export async function deleteQuestion(id: string): Promise<void> {
  await axios.delete(`http://localhost:4000/questions/${id}`);
}
