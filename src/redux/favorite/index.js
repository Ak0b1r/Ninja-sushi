import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('favorite') || "{}")

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        toggleFavorite:(state,action)=>{
            if(state[action.payload.id]) delete state[action.payload.id]
            else state[action.payload.id] = action.payload
            localStorage.setItem('favorite', JSON.stringify(state))
        }
    }
})

export const { toggleFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer