import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Theme } from "../config/types";

export const themeApi = createApi({
  reducerPath: "themeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://freuders-web-api-test-3.azurewebsites.net/api/",
  }),
  endpoints: (builder) => ({
    getAllThemes: builder.query<{ data: Theme[] }, void>({
      query: () => ({ url: "subjects" }),
    }),
  }),
});

export const { useGetAllThemesQuery } = themeApi;
