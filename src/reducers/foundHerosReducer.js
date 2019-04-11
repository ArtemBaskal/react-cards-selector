export default (state = [], action) => {
  if (action.type === "HEROES_FOUND") {
    return action.payload;
  }
  return state;
};
