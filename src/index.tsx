import React from 'react';
import { RouterProvider } from 'react-router5';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import 'theme/theme.scss';
import App from 'app/App';
import { router } from 'routers';
import { store, persistor } from 'app/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RouterProvider router={router}>
                    <App />
                </RouterProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
