import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../config';

const initialState: InitialState = {

};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
  },
});

export const { } = doctorsSlice.actions;

export default doctorsSlice.reducer;
