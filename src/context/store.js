import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../context/productsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "../context/categorySlice";
import { userApi } from "./userSlice";
import wishlistSlice from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    wishlist: wishlistSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(userApi.middleware)
      .concat(productsApi.middleware),
});

setupListeners(store.dispatch);
