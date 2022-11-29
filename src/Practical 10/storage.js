// storage.js
import { configureStore } from '@reduxjs/toolkit';
import recordSlice from './recordSlice';

export default configureStore({
    reducer: {
        record: recordSlice,
    },
});
