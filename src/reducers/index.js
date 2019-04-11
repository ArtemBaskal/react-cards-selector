import { combineReducers } from "redux";
import selectedUniverseReducer from "./selectedUniverseReducer";
import foundHerosReducer from "./foundHerosReducer";
import searchedNameReducer from "./searchedNameReducer";
import selectedCardsReducer from "./selectedCardsReducer";

export default combineReducers({
  selectedUniverse: selectedUniverseReducer,
  foundHeroes: foundHerosReducer,
  searchedName: searchedNameReducer,
  selectedCards: selectedCardsReducer
});
