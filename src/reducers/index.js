import { combineReducers, bindActionCreators } from "redux";
import _ from "lodash";

const selectedUniverseReducer = (state = "dc", action) => {
  if (action.type === "UNIVERSE_SELECTED") {
    return action.payload;
  }
  return state;
};

const foundHerosReducer = (state = [], action) => {
  if (action.type === "HEROES_FOUND") {
    return action.payload;
  }
  return state;
};

const searchedNameReducer = (state = "", action) => {
  if (action.type === "NAME_SEARCHED") {
    return action.payload;
  }
  return state;
};

const selectedCardsReducer = (state = [], action) => {
  switch (action.type) {
    case "CARDS_SELECTED": {
      console.log([...state, action.payload]);
      return [...state, action.payload];
    }

    case "CARD_MULTIPLE_SELECTED": {
      console.log(state);
      console.log(action.payload.selectedCards);
      return [...state];
    }

    case "CARDS_REMOVED": {
      console.log(state);
      return state.filter(el => el.name !== action.payload);
    }
    default:
      return state;
  }
};

// const clickCardReducer = (state = [], action) => {
//   if (action.type === "CARD_CLICKED") {
//     return action.payload;
//   }
//   return state;
// };

export default combineReducers({
  selectedUniverse: selectedUniverseReducer,
  foundHeroes: foundHerosReducer,
  searchedName: searchedNameReducer,
  selectedCards: selectedCardsReducer
});
