export default (pokemonType, modifierType) => {
  const modifier = {
    original: 0,
    lighten: 10,
    darken: -15,
  };
  const colors = {
    fire: "hsl(25.6,84.8%,56.1%)",
    normal: "hsl(58.7,20.9%,56.9%)",
    water: "hsl(220.9,82.5%,66.5%)",
    electric: "hsl(48.5,92.7%,57.1%)",
    grass: "hsl(97.6,52.3%,53.9%)",
    ice: "hsl(177.3,46.9%,72%)",
    fighting: "hsl(2.3,65.8%,45.9%)",
    poison: "hsl(301.2,44.9%,44.1%)",
    ground: "hsl(43.2,68.3%,64.1%)",
    flying: "hsl(255.6,80.6%,75.7%)",
    psychic: "hsl(341.7,93.2%,65.5%)",
    bug: "hsl(67.2,75.4%,41.4%)",
    rock: "hsl(50.2,54.2%,46.3%)",
    ghost: "hsl(266.3,26.9%,46.7%)",
    dragon: "hsl(257.5,97.1%,59.8%)",
    dark: "hsl(24.3,23.1%,35.7%)",
    steel: "hsl(240,19%,76.3%)",
    fairy: "hsl(330.4,49.7%,68%)",
  };

  const typeLightness =
    parseFloat(colors[pokemonType].match(/(\d+.\d+)%\)$/)[1]) +
    modifier[modifierType] +
    "%)";
  const modifiedColor = colors[pokemonType].replace(
    /(\d+.\d+)%\)$/,
    typeLightness
  );
  return modifiedColor;
};
