import { createSlice } from "@reduxjs/toolkit";
const initialState={
    counter:0
}

const CounterSlice = createSlice({
    name: "items",
   initialState,
   reducers:{
    increment:(state)=>{
        state.counter++
    },
    decrement:(state)=>{
        state.counter--
    },
    
   }
});

export const CounterReducer=CounterSlice.reducer 

export const{increment,decrement }= CounterSlice.actions