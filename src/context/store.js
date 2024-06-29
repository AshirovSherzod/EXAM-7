import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../context/productsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import wishlistSlice from "./wishlistSlice";
import { api } from "./api";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [api.reducerPath]: api.reducer,
    wishlist: wishlistSlice,
    auth: authSlice,
    cart: cartSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(productsApi.middleware),
});

setupListeners(store.dispatch);