import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


interface Product{ 
    id:number; 
    title:string; 
    price:number; 
    image:string; 
    rating:{
         rate:number;
         count:number
         }
    description:string;
    category:string;
   
}

interface ItemsState {
  data: Product[]
  isLoading: boolean
  error: string | null
  item:Product|null
}
const initialState :ItemsState ={
    data:[],
    isLoading:false,
    error:null,
    item:null
}

export const getallitems=createAsyncThunk("items",async ()=>{
    const {data}=await axios.get("https://fakestoreapi.com/products")
    return data
})

export const getItembyId=createAsyncThunk("getItemById",async (id : number)=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
    return data
})

export const itemsSlice= createSlice({
    name:"getitems",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(getallitems.fulfilled,(state,action)=>{
            state.data=action.payload
        })
        builder.addCase(getItembyId.fulfilled,(state,action)=>{
            state.item=action.payload
            console.log(state.data)
            console.log(action)
        })
      
    },
    
})


export const itemsreducer=itemsSlice.reducer

