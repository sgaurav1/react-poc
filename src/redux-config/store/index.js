import { configureStore } from "@reduxjs/toolkit";
import {CounterSlice} from '../slices/CounterSlice'
import { PostSlice } from "../slices/PostSlice";

const store = configureStore({
    reducer: {
        counter: CounterSlice.reducer,
        posts: PostSlice.reducer
    }
})

export default store;