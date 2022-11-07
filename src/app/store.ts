import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducers from './reducers';

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
