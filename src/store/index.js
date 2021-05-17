import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import companyReducer from './Company.store'

const rootReducer = combineReducers({
	company: companyReducer
})

const persistConfig = {
	key: 'tractian',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
	middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

const persistor = persistStore(store)

export { store, persistor };