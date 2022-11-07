import { default as axiosDefault } from 'axios';
import {
    withVersioning,
    VersioningStrategy,
    AxiosInstanceWithVersioning,
} from 'axios-api-versioning';
import { authRequest, errorResponse } from '../interceptors';

interface AxiosProps {
    url: string;
    method?: string;
    params?: object;
}

const BACKEND_API_ENDPOINT = '';

if (process.env.NODE_ENV === 'development' && !BACKEND_API_ENDPOINT) {
    console.log(
        'BACKEND_API_ENDPOINT config value not found. Please check your environment variables.',
    );
}

const baseClient = axiosDefault.create({
    baseURL: `${BACKEND_API_ENDPOINT}v{apiVersion}`,
    withCredentials: false,
});

const clientAction: AxiosInstanceWithVersioning = withVersioning(baseClient, {
    apiVersion: '1',
    versioningStrategy: VersioningStrategy.UrlPath,
});

clientAction.interceptors.request.use(...authRequest());
clientAction.interceptors.response.use(...errorResponse());

const axios = async ({ url, method, params = {}, ...rest }: AxiosProps) => {
    const config = {
        url,
        method,
        data: {},
    };

    switch (method) {
        case 'POST':
        case 'PATCH':
        case 'PUT': {
            config.data = params;
            break;
        }

        default:
            break;
    }

    return await clientAction({
        ...config,
        ...rest,
    });
};

export default axios;
