import { configureStore } from "@reduxjs/toolkit";
import { merchantApi } from "../services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [merchantApi.reducerPath]: merchantApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({serializableCheck:false}).concat(merchantApi.middleware)
})

setupListeners(store.dispatch);


