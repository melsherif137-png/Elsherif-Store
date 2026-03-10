export const initialValue = 0;

export const reduce = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    case "RESET":
      return action.payload;
    default:
      return state;
  }
};
