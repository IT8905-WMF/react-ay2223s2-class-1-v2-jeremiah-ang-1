// storage.js
import { configureStore } from '@reduxjs/toolkit';
import recordSlice from "./recordSlice.js";
export default configureStore({
  reducer: {
    record: recordSlice
  }
});