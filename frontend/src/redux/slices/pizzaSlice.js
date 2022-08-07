import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// export const fetchPizza = createAsyncThunk('pizza/fetchPizzaStatus', async () => {
//    const response = await axios.get('http://626d16545267c14d5677d9c2.mockapi.io/items')
//    return response.data
// })

const initialState = {
   items: [],
   isLoaded: false,
}

export const pizzaSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {
      setItems: (state, action) => {
         state.items = action.payload;
         state.isLoaded = true;
      },
      // extraReducers: {
      //    [fetchPizza]: (state, action) => {
      //       console.log(state);
      //    }
      // }
   },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer