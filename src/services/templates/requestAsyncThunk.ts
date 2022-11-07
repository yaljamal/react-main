import axios from './axios';
import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';

interface requestProps {
    storeName: string;
    _url: string;
    exact?: string;
    method: 'POST' | 'GET' | 'PATCH' | 'UPLOAD';
}

interface paramsProps {
    urlParams?: string | '';
}

const request = ({ storeName, _url, exact, ...rest }: requestProps) => {
    return createAsyncThunk(_url + exact, async (params: paramsProps, { rejectWithValue }) => {
        let url = _url || '';

        if (params?.urlParams) {
            url += params?.urlParams;
            delete params?.urlParams;
        }

        try {
            const result = await axios({
                params,
                url,
                ...rest,
            });

            return result;
        } catch (err: any) {
            const { response, message } = err;

            return rejectWithValue({
                status: response?.status,
                message: response?.data,
                cancelToken: message?.cancelToken,
                id: nanoid(),
            });
        }
    });
};

export default request;
