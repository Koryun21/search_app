import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../../shared/api';

export const getSpecialists = createAsyncThunk(
  'doctors/getSpecialists',
  async () => {
    const { data } = await instance.get('/search/specialists')
    console.log("data",data);
  },
);