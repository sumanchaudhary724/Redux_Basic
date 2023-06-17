import React, { useState } from "react";
import { useDispatch } from "react-redux";
import displayData, { setUser } from "./userSlice";

export const Form = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputVal] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputVal(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(inputValue));
  };
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <button>Add</button>
        <div>Text Display in real time: {inputValue}</div>
      </form>
    </div>
  );
};
