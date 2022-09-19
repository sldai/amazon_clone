import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';

const initialState = {
  user: null as { id: string; name: string | null; email: string | null } | null,
  isLoading: false,
  errorMessage: '',
};

export type AuthState = typeof initialState;

function authError(error: any) {
  const msg: string =
    (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
  const authMsg = msg.match(/[(]auth[/](.*)[)]/);
  return authMsg ? authMsg[1] : '';
}

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return { id: user.uid, email: user.email, name: user.displayName };
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(authError(error));
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }: { name: string; email: string; password: string }, thunkAPI) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: name });
      return { id: user.uid, email: user.email, name: user.displayName };
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(authError(error));
    }
  }
);

export const signOut = createAsyncThunk('auth/signOut', async () => {
  await fbSignOut(auth);
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = '';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = '';
        state.user = action.payload!;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload as string;
      })
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = '';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = '';
        state.user = action.payload!;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload as string;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
