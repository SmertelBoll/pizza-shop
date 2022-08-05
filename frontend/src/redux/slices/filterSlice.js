import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   categoryId: 0,
   sortBy: {
      popupName: 'популярності',
      backendName: 'rating'
   }
}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setCategory: (state, action) => {
         state.categoryId = action.payload
      },
      setSort: (state, action) => {
         state.sortBy = action.payload
      }
   },
})

// Action creators are generated for each case reducer function
export const { setCategory, setSort } = filterSlice.actions

export default filterSlice.reducer