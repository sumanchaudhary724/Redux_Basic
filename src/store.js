import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    counterData: counterReducer,
    userData: userReducer,
  },
});
export default store;
