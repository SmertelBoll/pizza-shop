import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// export const fetchPizza = createAsyncThunk('pizza/fetchPizzaStatus', async () => {
//    const response = await axios.get('http://626d16545267c14d5677d9c2.mockapi.io/items')
//    return response.data
// })

const initialState = {
   items: [],
}

export const pizzaSlice = createSlice({
   name: 'pizza',
   initialState,
   reducers: {
      setItems: (state, action) => {
         state.items = action.payload
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