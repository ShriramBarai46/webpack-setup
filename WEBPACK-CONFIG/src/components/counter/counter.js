

import React, { useReducer } from "react";


const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: <h3>{state.count}</h3>
      <button className="buttto-01" onClick={() => dispatch({ type: "increment" })}>ADD</button>
      <button className="buttto-02" onClick={() => dispatch({ type: "decrement" })}>REMOVE</button>
    </>
  );
}
export default Counter;