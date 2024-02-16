import { configureStore } from '@reduxjs/toolkit';
// import persistedReducer from './rootReducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import rootReducer from "./rootReducer";


export const store = configureStore({
  // reducer: persistedReducer,
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: ['persist/PERSIST'],
  //     },
  //   }),
});
export const persistor = persistStore(store);

