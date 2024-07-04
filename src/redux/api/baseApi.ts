import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://university-management-server-alpha.vercel.app/api/v1",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
