import { configureStore } from "@reduxjs/toolkit"

import filmReducer from "./filmSlice.js"

export default configureStore({
    reducer: {
        film: filmReducer
    }
})