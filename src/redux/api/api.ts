import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://books-server-29hwbc8xr-muradwahid.vercel.app/api/v1',
    mode: "cors",
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*')
      return headers
    },
  }),
  tagTypes: ['comment'],
  endpoints: () => ({}),
});
