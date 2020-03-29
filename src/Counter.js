import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, RESET } from "./Action";

function Counter({ state, increase, reset, decrease }) {
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={increase}>INCREAMENT</button>
      <button onClick={reset}>RESET</button>
      <button onClick={decrease}>DECREAMENT</button>
    </div>
  );
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    increase: () => dispatch({ type: INCREASE }),
    reset: () => dispatch({ type: RESET }),
    decrease: () => dispatch({ type: DECREASE })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
