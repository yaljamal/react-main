import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import localforage from 'localforage';

import { authAPI } from 'services/apis';

const authPersistConfig = {
    key: 'auth',
    storage: localforage,
    whiteList: ['entities'],
};

const authPersistReducer = persistReducer(authPersistConfig, authAPI.authSlice.reducer);

const reducers = combineReducers({
    auth: authPersistReducer,
});

export default reducers;
