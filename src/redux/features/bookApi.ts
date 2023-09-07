import { api } from '../api/api';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({ query: () => '/book' }),
    singleBook: builder.query({ query: (id) =>`/book/${id}`})
  }),
});

export const { useGetBooksQuery,useSingleBookQuery } = bookApi;
