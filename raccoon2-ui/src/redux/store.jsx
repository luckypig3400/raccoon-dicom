import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/Auth";

export default configureStore({
    reducer: {
        auth: authReducer
    }
});
