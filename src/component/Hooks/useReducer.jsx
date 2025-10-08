import React, { useReducer } from "react";
import "./style.css";

// Reducer function
const reducer = (state, action) => {

if(action.type == "INCR"){
    state = state+1;
}
if(action > 0 && action.type == "DECR"){
    state = state-1;
}
  return state;
};

const Usereducer = () => {
  const initialData = 10;

  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>

        <div
          className="button2"
          onClick={() => dispatch({ type: "INCR" })}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>

        <div
          className="button2"
          onClick={() => dispatch({ type: "DECR" })}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default Usereducer;
