import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [] as any[],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action) {
      state.basket.push(action.payload);
    },
  },
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
