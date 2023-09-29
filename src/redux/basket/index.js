import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('basket') || "{}")

const saveLocalStorage = (data) => {
    localStorage.setItem('basket', JSON.stringify(data))
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBasket: (state, action) => {
            state[action.payload.id] = {
                ...action.payload,
                amount: 1
            }
            saveLocalStorage(state)
        },
        deleteBasket: (state, action) => {
            delete state[action.payload]
            saveLocalStorage(state)
        },
        addAmount: (state, action) => {
            state[action.payload].amount++
            saveLocalStorage(state)
        },
        deleteAmount: (state, action) => {
            if (state[action.payload].amount > 1) {
                state[action.payload].amount--
                saveLocalStorage(state)
            }
        }
    }
})

export const { addBasket, deleteBasket, addAmount, deleteAmount } = basketSlice.actions

export default basketSlice.reducer

