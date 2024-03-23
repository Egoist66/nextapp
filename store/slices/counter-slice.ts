'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RootState {
    counter: number;
}
  
const initialState: RootState = {
    counter: 0,
}
  
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state: RootState) {
            state.counter += 1
            
        },
        decrement(state: RootState) {
            state.counter -= 1
        },
        incrementByAmount(state: RootState, action: PayloadAction<number>) {
            state.counter += action.payload
        }
        
    },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer