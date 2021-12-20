import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import axios from 'axios';
import {multiClientMiddleware} from 'redux-axios-middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as reducers from './ducks';

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
    blacklist: [],
  },
  rootReducer,
);

const axiosMiddleware = multiClientMiddleware(
  {
    default: {
      client: axios.create({
        baseURL: `http://server/api`,
      }),
    },
  },
  {
    returnRejectedPromiseOnError: true,
    interceptors: {
      request: [
        {
          success: function ({getState}, req) {
            const {
              auth: {token},
            } = getState();
            return {
              ...req,
              headers: {
                'access-token': (token && `${token}`) || undefined,
              },
            };
          },
        },
      ],
      response: [
        {
          success: function (reduxAPI, res) {
            return Promise.resolve(res.data);
          },
          error: function (reduxAPI, err) {
            console.log('mid', err);
            return Promise.reject(err);
          },
        },
      ],
    },
  },
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    axiosMiddleware,
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

let persistor = persistStore(store);

export {store, persistor};
