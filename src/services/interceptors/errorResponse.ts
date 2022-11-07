import get from 'lodash/get';

const errorResponse = () => {
    return [
        (response: any) => {
            return response;
        },
        (error: any) => {
            const responseStatus = get(error, 'response.status');
            if (responseStatus === 401) {
                return null;
            }

            return Promise.reject(error);
        },
    ];
};

export default errorResponse;
