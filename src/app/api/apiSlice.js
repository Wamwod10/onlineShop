import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://dummyjson.com/" });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Product"],
    endpoints: () => ({}),
});