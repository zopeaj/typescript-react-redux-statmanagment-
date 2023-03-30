import { createApi, fetchBaseQuery } from '@reduxjs/tookit/query/react';

export const studentServceApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/api/v1/student' }),
  tags: ['StudentApi'],
  endpoints: (builder) => ({
    createStudent: builder.mutation
  })
})
