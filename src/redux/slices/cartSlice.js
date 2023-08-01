import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalPrice: 0,
        items: [],
    },

    reducers: {
        addItem: (state, action) => {
            const searchItem = state.items.find(obj => obj.id === action.payload.id);
            if (searchItem) {
                searchItem.count++;
            } else {
                const newItem = {
                    ...action.payload,
                    count: 1,
                };
                state.items.push(newItem);
            }
            state.totalPrice = state.items.reduce((sum,obj)=>{
                return obj.price * obj.count + sum;
            },0)
        },
        removeItem: (state, action) => {
            state.items.filter(obj => obj.id !== action.payload.id);
        },
        clearItems: (state) => {
            state.items = [];
        }
    },
})





export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;