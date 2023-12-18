import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore(
    {
        reducer:{
            counter : counterSlice
        },
    }
)
// we have to insert a (slice logics that how the state would be updated) inside the reducer
// a slice is just like a bussiness logics of a feature 
// think of a example as a counter which can be increament,decreament and increamet/decreament by a ammount
// where counter is a feature and increament/decreament are bussiness logics.
// the whole feature + bussiness logic is equal to a Slice.
// take slice word as a jargon.
// each feature can have its own slice.