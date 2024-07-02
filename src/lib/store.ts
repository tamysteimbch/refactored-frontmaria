import { configureStore } from '@reduxjs/toolkit';
import { meSlice } from './features/me/me';
import { schoolSlice } from './features/me/school';
import { questionsSlice } from './features/me/questions';

export const makeStore = () => {
  return configureStore({
    reducer: {
      me: meSlice.reducer,
      school: schoolSlice.reducer,
      questions: questionsSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
