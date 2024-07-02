import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Teacher } from '@/app/api/types/teacher.types';

export interface MeState {
  me: Teacher;
}

const initialState: MeState = {
  me: {} as Teacher,
};

export const meSlice = createSlice({
  name: 'me',
  initialState,
  reducers: {
    setTeacher: (state, action: PayloadAction<Teacher>) => {
      state.me = action.payload;
    },
  },
});

export const { setTeacher } = meSlice.actions;

export default meSlice.reducer;
