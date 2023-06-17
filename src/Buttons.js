import React from "react";
import { increment, decrement } from "./counterSlice";
import { useDispatch } from "react-redux";

export const Buttons = () => {
  const dispatch = useDispatch();

  const handleOnIncrement = () => {
    dispatch(increment());
  };
  return (
    <p>
      <button onClick={handleOnIncrement}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </p>
  );
};
