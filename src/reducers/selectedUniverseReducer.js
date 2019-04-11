export default (state = "dc", action) => {
  if (action.type === "UNIVERSE_SELECTED") {
    return action.payload;
  }
  return state;
};
