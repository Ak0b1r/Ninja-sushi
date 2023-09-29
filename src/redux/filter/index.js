import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    updatedData: [],
    selectedTypes: [],
    selectedCatalog: [],
    selectedIngredient: [],
    dataCount: 8
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterData: (state, action) => {
            state.data = action.payload
            state.updatedData = action.payload
        },
        sortedData: (state, action) => {
            if (action.payload === 'expensive') {
                state.updatedData = state.data.sort((a, b) => b.price - a.price)
            } else {
                state.updatedData = state.data.sort((a, b) => a.price - b.price)
            }
        },
        filterByTypes: (state, action) => {
            const typeIndex = state.selectedTypes.indexOf(action.payload)
            if (typeIndex === -1) {
                state.selectedTypes = [...state.selectedTypes, action.payload]
            } else {
                state.selectedTypes.splice(typeIndex, 1)
            }
            if (action.payload === 'all' || state.selectedTypes.length === 0) {
                state.selectedTypes = []
                state.updatedData = state.data
            } else {
                state.updatedData = state.data.filter(product => state.selectedTypes.includes(product.type))
            }
        },
        filteredByCatalog: (state, action) => {
            const catalogIndex = state.selectedCatalog.indexOf(action.payload)
            if (catalogIndex === -1) {
                state.selectedCatalog = [...state.selectedCatalog, action.payload]
            } else {
                state.selectedCatalog.splice(catalogIndex, 1)
            }
            state.updatedData = state.data.filter((product) =>
                state.selectedCatalog.every((catalog) => product.catalog?.includes(catalog)))
        },
        filteredByIngredient: (state, action) => {
            const ingredientIndex = state.selectedIngredient.indexOf(action.payload)
            if (ingredientIndex === -1) {
                state.selectedIngredient = [...state.selectedIngredient, action.payload]
            } else {
                state.selectedIngredient.splice(ingredientIndex, 1)
            }
            if (action.payload === 'clear') {
                state.selectedIngredient = []
                state.updatedData = state.data
            } else {
                state.updatedData = state.data.filter((product) =>
                    state.selectedIngredient.every((ingredient) => product.incredients?.includes(ingredient)))
            }
        },
        loadMore: (state, action) => {
            state.dataCount += action.payload
        },
    }
})

export const { loadMore, filterData, sortedData, filterByTypes, filteredByCatalog, filteredByIngredient } = filterSlice.actions

export default filterSlice.reducer