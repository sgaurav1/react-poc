import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'mycounter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // @ts-ignore
        incrementByAmount: (state, action) => {
            console.log(action);
            state.value += action.payload
        },
    },

})

export const { increment,decrement,incrementByAmount } = CounterSlice.actions
export default CounterSlice.reducer;