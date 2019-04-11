export default (state = "", action) => {
  if (action.type === "NAME_SEARCHED") {
    return action.payload;
  }
  return state;
};
