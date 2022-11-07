import { createSlice } from '@reduxjs/toolkit';
import { requestAsyncThunk, responseAsyncThunk } from '../../templates';

interface UsersState {
    entities: [];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    currentRequestId: undefined;
    error: [];
}

const initialState = {
    loading: 'idle',
    entities: {},
    currentRequestId: undefined,
    error: [],
} as UsersState;

export const signIn = () => {
    return requestAsyncThunk({
        storeName: 'auth',
        _url: `auth/login`,
        method: 'POST',
    });
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAction: () => {
            return initialState;
        },
    },
    extraReducers: responseAsyncThunk(signIn()),
});
