import { configureStore } from "@reduxjs/toolkit"
import { CounterReducer } from "./counterSlice"
import { itemsreducer } from "./itemsSlice"
import { cartReducer } from "./cartslice"


export const Store = configureStore({
  reducer: {
    counter: CounterReducer,
    items: itemsreducer,
    cart:cartReducer
  }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch