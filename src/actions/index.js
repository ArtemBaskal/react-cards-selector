export const selectUniverse = universe => {
  return {
    type: "UNIVERSE_SELECTED",
    payload: universe
  };
};

export const findHeroes = heroes => {
  return {
    type: "HEROES_FOUND",
    payload: heroes
  };
};

export const searchName = heroes => {
  return {
    type: "NAME_SEARCHED",
    payload: heroes
  };
};

export const selectCards = heroes => {
  return {
    type: "CARDS_SELECTED",
    payload: heroes
  };
};
