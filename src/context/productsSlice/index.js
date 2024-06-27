import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("x-auth-token");
      if (token) {
        // Har so'rovda mana shu token headersda qo'shib jo'natiladi
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (productId) => ({
        url: `products/${productId}`,
      }),
      providesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: "products/create",
        method: "POST",
        body,
      }),
      providesTags: ["Product"],
    }),
    getCategory: builder.query({
      query: (params) => ({
        url: "category",
        params,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useGetCategoryQuery,
} = productsApi;
