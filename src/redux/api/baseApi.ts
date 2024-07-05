import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://university-management-server-alpha.vercel.app/api/v1",
  // baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", token);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    // sending refresh token to generate new access token
    const res = await fetch(
      "https://university-management-server-alpha.vercel.app/auth/refresh-token",
      // "http://localhost:5000/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await res.json();
    console.log("refresh data", data);
    const user = (api.getState() as RootState).auth.user;

    api.dispatch(
      setUser({
        user,
        token: data?.data?.accessToken,
      })
    );
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
