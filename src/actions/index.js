export const selectUniverse = universe => {
  return {
    type: "UNIVERSE_SELECTED",
    payload: universe
  };
};

export const searchHeroes = heroes => {
  return {
    type: "HERO_SEARCHED",
    payload: heroes
  };
};
