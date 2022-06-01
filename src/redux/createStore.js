import {applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'
import {configureStore } from "@reduxjs/toolkit"
// export const middleWares= [thunkMiddleware,logger];

// export const store = configureStore(rootReducer,applyMiddleware(...middleWares));

export const store = configureStore({
    middleware: [thunk, logger],
    reducer: rootReducer(),
  });
export default store;