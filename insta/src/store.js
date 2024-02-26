// redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import authReducer from './reducers/authSlice';
// import authSlice from './reducers/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Reducers to persist
};

const rootReducer = combineReducers({
    auth: {},
    // other: otherReducer,
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export {store,persistor};
