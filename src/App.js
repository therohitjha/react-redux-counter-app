import React from "react";
import "./styles.css";
import { createStore } from "redux";
import { reducer, initialState } from "./Reducer";
import Counter from "./Counter";
import { Provider } from "react-redux";

const store = createStore(reducer, initialState);

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
