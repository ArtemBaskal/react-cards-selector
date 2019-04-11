export default (state = [], action) => {
  switch (action.type) {
    case "CARDS_SELECTED": {
      return [...state, action.payload];
    }
    case "CARD_MULTIPLE_SELECTED": {
      return [...state];
    }
    case "CARDS_REMOVED": {
      return state.filter(el => el.name !== action.payload);
    }
    default:
      return state;
  }
};
