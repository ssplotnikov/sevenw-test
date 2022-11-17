import { configureStore } from '@reduxjs/toolkit';
import { rowSlice } from './RowSlice/rowSlice'

export const store = configureStore({
    reducer: {
        rows: rowSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
