const response = (Request: any) => {
    return {
        [Request.pending.type]: (state: any, action: any) => {
            if (state.loading === 'idle') {
                state.loading = 'pending';
                state.currentRequestId = action.meta.requestId;
            }
        },
        [Request.fulfilled.type]: (state: any, action: any) => {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.entities = {
                    ...action.payload.data,
                    status: action.payload.status,
                };
                state.status = action.payload.status;
                state.error = undefined;
                state.currentRequestId = undefined;
            }
        },
        [Request.rejected.type]: (state: any, action: any) => {
            const { cancelToken } = action.payload;

            if (state.loading === 'pending' && !cancelToken) {
                state.loading = 'idle';
                state.error =
                    action?.payload?.message?.errors ||
                    action?.payload?.message ||
                    action?.error?.message;
                state.entities = undefined;
                state.status = action.payload.status;
                state.currentRequestId = undefined;
            }
        },
    };
};

export default response;
