import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    categoryId: 0,
    sort: [
      { name: 'popularity', sortProperty: 'rating' },
      { name: 'price', sortProperty: 'price' },
      { name: 'alphabet', sortProperty: 'title' },
    ],
  },
  reducers: {
    setFilterId: (state, action) => {
      state.categoryId = action.payload;
    }
  },
})





export const { setFilterId } = filterSlice.actions;

export default filterSlice.reducer;