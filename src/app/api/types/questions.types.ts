export type QuestionAlternatives = {
  option: 'A' | 'B' | 'C' | 'D';
  text: string;
};

export type Questions = {
  _id: string;
  question: string;
  value: number;
  level: 'Fácil' | 'Médio' | 'Difícil';
  color: string;
  hasImage: boolean;
  alternatives: QuestionAlternatives[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
};

export type QuestionsBody = {
  question: string;
  value: number;
  level: 'Fácil' | 'Médio' | 'Difícil';
  color: string;
  hasImage: boolean;
  alternatives: QuestionAlternatives[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
};
