import { persistStore,persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { balanceReducer } from './balance/BalanceSlice';
import storage from 'redux-persist/lib/storage'

const balancePersistConfig = {
  key: 'balance',
  storage,
}

const persistedBalanceReducer = persistReducer(
  balancePersistConfig,
  balanceReducer
)

export const store = configureStore({
  reducer: {
    balance: persistedBalanceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
