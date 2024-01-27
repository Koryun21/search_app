import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../config';
import { getMoreSpecialists, getSpecialists } from './doctors.thunk';

const initialState: InitialState = {
  specialists:[],
  isLoading:false
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getSpecialists.pending,(state, action) => {
      state.isLoading = true;
    })
    builder.addCase(getSpecialists.fulfilled, (state, action) => {
      state.isLoading = false;
      state.specialists = action.payload.items;
    });
    builder.addCase(getSpecialists.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getMoreSpecialists.pending,(state, action) => {
    })
    builder.addCase(getMoreSpecialists.fulfilled, (state, action) => {
      state.isLoading = false;
      state.specialists = [...state.specialists,...action.payload.items];
    });
    builder.addCase(getMoreSpecialists.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { } = doctorsSlice.actions;

export default doctorsSlice.reducer;
