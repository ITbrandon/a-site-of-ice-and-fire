import { createSlice } from "@reduxjs/toolkit";


interface Token {
 name: string;
}


interface TokenState {
 token: Token | null
}


const storedToken = localStorage.getItem("token")


const initialState: TokenState = {
 token: storedToken ? JSON.parse(storedToken) : null,
};


const tokenSlice = createSlice({
 name: "token",
 initialState,
 reducers: {
   setToken: (state, action) => {
     state.token = action.payload;
     localStorage.setItem("token", JSON.stringify(action.payload));
   },
   clearToken: (state) => {
     state.token = null;
     localStorage.removeItem("token")
   },
 },
});


export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;