import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Questions } from '@/app/api/types/questions.types';

export interface QuestionsState {
  questions: Questions[];
}

const initialState: QuestionsState = {
  questions: [] as Questions[],
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Questions[]>) => {
      state.questions = action.payload;
    },
  },
});

export const { setQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
