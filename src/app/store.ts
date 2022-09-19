import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import basketReducer from '../features/basket/basketSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
