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
