import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { School } from '@/app/api/types/teacher.types';

export interface MeState {
  school: School;
}

const initialState: MeState = {
  school: {} as School,
};

export const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    setSchool: (state, action: PayloadAction<School>) => {
      state.school = action.payload;
    },
  },
});

export const { setSchool } = schoolSlice.actions;

export default schoolSlice.reducer;
