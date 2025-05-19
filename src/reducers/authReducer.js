import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.clear("user")

    },
    setUser: (state, action) => {
      state.user = action.payload.userData;
      localStorage.setItem('user', JSON.stringify(action.payload.userData));
    },
  },
});

export const { logout,setUser } = authSlice.actions;
export default authSlice.reducer;
