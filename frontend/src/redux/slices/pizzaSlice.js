import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
   'pizza/fetchPizzasStatus',
   async (params) => {
      const { categoryId, sortBy } = params
      const res = await axios.get(`http://626d16545267c14d5677d9c2.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortBy}`)
      return res.data
   })

const initialState = {
   items: [],
   isLoaded: false
}

export const pizzaSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {
      setItems: (state, action) => {
         state.items = action.payload;
      },
   },
   extraReducers: {         // для fetchPizzas
      [fetchPizzas.pending]: (state) => {       // якщо відправка
         state.items = []               // щоб випадко не показало старі елементи, після вибору нових
         state.isLoaded = false;
      },
      [fetchPizzas.fulfilled]: (state, action) => {     // якщо успішно
         state.items = action.payload
         state.isLoaded = true;
      },
      [fetchPizzas.rejected]: (state) => {      // якщо помилка
         state.items = [];
         state.isLoaded = true;
      },

   }
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer