import { RootState } from '@/store';
import {  fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.STOCKS_API_URL}`,
  prepareHeaders: (headers) => {
    return headers;
  },
});
