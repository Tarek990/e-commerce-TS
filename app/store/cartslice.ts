import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { increment } from "./counterSlice"

interface CartItem {
  id:number
  title:string
  price:number
  image:string
  quantity:number
}

interface CartState {
  items: CartItem[]
}

const initialState:CartState = {
  items:[]
}

export const cartSlice = createSlice({
  name:"cart",
  initialState:initialState,
  reducers:{

    addToCart:(state,action:PayloadAction<CartItem>)=>{
      const existing = state.items.find(
        item => item.id === action.payload.id
      )

      if(existing){
        existing.quantity += 1
      }else{
        state.items.push(action.payload)
      }
      
    },

    removeFromCart:(state,action:PayloadAction<number>)=>{
      state.items = state.items.filter(
        item => item.id !== action.payload,
        
      )
      
    },

    increaseQty:(state,action:PayloadAction<number>)=>{
      const item = state.items.find(
        i => i.id === action.payload
      )
      if(item) item.quantity++
    },

    decreaseQty:(state,action:PayloadAction<number>)=>{
      const item = state.items.find(
        i => i.id === action.payload
      )

      if(item){
        if(item.quantity > 1){
          item.quantity--
        }
      }
    }

  }
})

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty
} = cartSlice.actions

export const  cartReducer = cartSlice.reducer 