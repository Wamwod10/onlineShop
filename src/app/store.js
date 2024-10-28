import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import favoriteSlice from "./features/favoriteSlice";

const store = configureStore({
    reducer: {
        favorite: favoriteSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});
export default store;