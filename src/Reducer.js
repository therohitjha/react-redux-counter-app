import { INCREASE, DECREASE, RESET } from "./Action";
export const initialState = 0;
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case RESET:
      return initialState;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
