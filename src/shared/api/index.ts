import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LocalStorageKeys, getLocalStorageObject } from "../utils";

export const BASE_URL = import.meta.env.VITE_API_URL;

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.PROD ? BASE_URL : "/",
    prepareHeaders: (headers) => {
      const { token } = getLocalStorageObject(LocalStorageKeys.USER);
      if (token) headers.set("authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: () => ({}),
});
