import { createSlice } from '@reduxjs/toolkit';

export interface Item {
  id: string;
  price: number;
  imageSrc: string;
  rating: number;
  title: string;
}

const initialState = {
  items: [] as Item[],
};

export type BasketState = typeof initialState;

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action) {
      state.items.push(action.payload);
    },
    removeFromBasket(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) state.items.splice(index, 1);
      else console.warn(`Cant remove prodcut (id: ${action.payload.id}) as its not in basket!`);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
