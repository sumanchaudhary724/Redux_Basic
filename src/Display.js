import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const { counter } = useSelector((state) => state.counterData);
  const { userList } = useSelector((state) => state.userData);
  return (
    <div>
      {counter}
      <hr />
      <ul>
        {userList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
