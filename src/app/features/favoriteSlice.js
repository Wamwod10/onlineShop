import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favorite: JSON.parse(localStorage.getItem("favorite") || []),
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.favorite.push(action.payload)
            localStorage.setItem("favorite", JSON.stringify(state.favorite))
        },
        deleteFromFavorite: (state, action) => {
            state.favorite = state.favorite.filter((item) => item.id !== action.payload.id)
            localStorage.setItem("favorite", JSON.stringify(state.favorite))
        }
    },
})

export const { addToFavorite,
    deleteFromFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer