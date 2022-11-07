import { store } from 'app/store';
import { includes } from 'lodash';
import { tokenSelector } from './selectors';

const AUTH_CHECK_METHODS = ['post', 'put', 'patch', 'delete', 'get'];

const authRequest = () => {
    return [
        (config: any) => {
            if (includes(AUTH_CHECK_METHODS, config.method)) {
                const authToken = tokenSelector(store?.getState?.());
                if (authToken) config.headers['Authorization'] = `Bearer ${authToken}`;
            }

            return config;
        },
        (error: any) => {
            return Promise.reject(error.data.error.message);
        },
    ];
};

export default authRequest;
