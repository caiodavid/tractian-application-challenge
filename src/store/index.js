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
import systemInfoReducer from './SystemInfos.store'
import companyReducer from './Company.store'
import unitsReducer from './Units.store'
import usersReducer from './Users.store'
import assetsReducer from './Assets.store'


const rootReducer = combineReducers({
	systemInfo: systemInfoReducer,
	company: companyReducer,
	units: unitsReducer,
	users: usersReducer,
	assets: assetsReducer
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