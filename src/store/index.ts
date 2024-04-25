// store.ts

import { configureStore } from '@reduxjs/toolkit';
import { marketNewsApi } from './features/market/MarketNewsService';

const store = configureStore({
  reducer: {
    [marketNewsApi.reducerPath]: marketNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const marketNewsApiMiddleware = marketNewsApi.middleware;
    return getDefaultMiddleware()
      .concat(marketNewsApiMiddleware)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
