export const counterReducer = function(state, action) {
  if (state === undefined) {
    return 0;
  }
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};
