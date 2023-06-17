import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userList = [...state.userList, action.payload];
    },
  },
});

const { reducer, actions } = userSlice;
export const { setUser } = actions;
export default reducer;
