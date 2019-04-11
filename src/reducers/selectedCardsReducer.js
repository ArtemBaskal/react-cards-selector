export default (state = [], action) => {
  switch (action.type) {
    case "CARDS_SELECTED": {
      console.log([...state, action.payload]);
      return [...state, action.payload];
    }

    case "CARD_MULTIPLE_SELECTED": {
      console.log(state);
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
