import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increament : (state)=>{
            state.value += 1 
        },
        decreament : (state)=>{
           state.value -= 1
        },
        incbyammount : (state,action)=>{
            state.value += action.payload
        }
    }
})
/*
Redux requires that we write all state updates immutably, by making copies of data and updating the copies.
However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to
write "mutating" update logic that becomes correct immutable updates.
immer is a small js library  ref :- https://immerjs.github.io/immer/
immer allows us to mutate the state directly. 
without it we could not be able to mutate state variables
*/

export const { increament,decreament,incbyammount } = counterSlice.actions

export default counterSlice.reducer