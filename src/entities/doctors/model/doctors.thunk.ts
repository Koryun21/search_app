import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '@api';

import { GetSpecialistsReturnType } from '../config';

export const getSpecialists = createAsyncThunk(
  'doctors/getSpecialists',
  async (queryParams: Record<string, string>) => {
    const { data } = await instance.get<GetSpecialistsReturnType>(
      '/search/specialists',
      {
        params: {
          offSet: 0,
          ...queryParams,
        },
      },
    );
    return data;
  },
);

export const getMoreSpecialists = createAsyncThunk(
  'doctors/getMoreSpecialists',
  async (queryParams: Record<string, string>) => {
    const { data } = await instance.get<GetSpecialistsReturnType>(
      '/search/specialists',
      {
        params: {
          ...queryParams,
        },
      },
    );
    return data;
  },
);
