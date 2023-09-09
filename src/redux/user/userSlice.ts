/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase";

interface IUserState {
  user: {
    email: string | null;
  };
}
const initialState: IUserState = {
  user: {
    email: null,
  },
};
interface IUserLogIn {
  email: string;
  password: string;
}
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email,password }:IUserLogIn) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ email, password }:IUserLogIn) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);
export const googleSignIn = createAsyncThunk(
  'user/loginGoogle',
  async ({google}:any ) => {
    const data = await signInWithPopup(auth, google);
    return data.user.email
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    setUser: (state, action) => {
      state.user.email=action.payload
    }
  }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;