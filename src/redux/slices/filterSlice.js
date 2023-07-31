import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    categoryId: 0,
    sort: {
      name: 'popularity', sortProperty: 'rating'
    },
  },

  reducers: {
    setFilterId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
})





export const { setFilterId, setSort } = filterSlice.actions;

export default filterSlice.reducer;