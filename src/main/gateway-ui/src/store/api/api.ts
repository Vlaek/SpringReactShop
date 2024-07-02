import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct, IUser } from '../../types'

const API_URL = 'http://localhost:8081'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['User', 'Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => '/products',
      providesTags: ['Products'],
    }),
    deleteProduct: builder.mutation<{ succes: boolean; url: number }, number>({
      query(id) {
        return {
          url: `products/${id}`,
          method: 'DELETE',
        }
      },
      // нужно для повторной загрузки
      invalidatesTags: ['Products'],
    }),
    getUsers: builder.query<IUser[], void>({
      query: () => '/users',
      providesTags: ['User'],
    }),
    deleteUser: builder.mutation<{ succes: boolean; url: number }, number>({
      query(id) {
        return {
          url: `users/${id}`,
          method: 'DELETE',
        }
      },
      // нужно для повторной загрузки
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useDeleteProductMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
} = api
