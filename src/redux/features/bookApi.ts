import { api } from '../api/api';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({ query: () => '/book' }),
    singleBook: builder.query({ query: (id) => `/book/${id}` }),
    postCommnet: builder.mutation({
      query: (data) => ({
        url: '/review',
        method: 'POST',
        body: data,
      }),
      invalidatesTags:['comment']
    }),
    getCommnet: builder.query({
      query: (id) => `/review/${id}`,
      providesTags:['comment']
    }),
  }),
});

export const { useGetBooksQuery,useSingleBookQuery,useGetCommnetQuery,usePostCommnetMutation } = bookApi;
