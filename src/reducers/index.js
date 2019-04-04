import { combineReducers } from "redux";

const selectedUniverseReducer = (selectedUniverse = "dc", action) => {
  if (action.type === "UNIVERSE_SELECTED") {
    return action.payload;
  }
  return selectedUniverse;
};

export default combineReducers({
  selectedUniverse: selectedUniverseReducer
});
