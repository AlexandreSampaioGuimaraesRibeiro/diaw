export const typeColors = {
  Normal: "#A8A77A", Fire: "#EE8130", Water: "#6390F0", Grass: "#7AC74C",
  Electric: "#F7D02C", Ice: "#96D9D6", Fighting: "#C22E28", Poison: "#A33EA1",
  Ground: "#E2BF65", Flying: "#A98FF3", Psychic: "#F95587", Bug: "#A6B91A",
  Rock: "#B6A136", Ghost: "#735797", Dark: "#705746", Dragon: "#6F35FC",
  Steel: "#B7B7CE", Typeless: "#999",
};

export const getTypeColor = (name) => typeColors[name] ?? "#999";
