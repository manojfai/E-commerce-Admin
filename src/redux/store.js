import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './reducer/auth';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const rootReducer = combineReducers({
  detailedpage: AuthReducer
});

const persitedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persitedReducer
});
