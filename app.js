const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

console.log(pokemon[58].name);

console.log(game)

game.difficulty = "Medium";
console.log (game.difficulty)

game.party.push({
  number: 1,
  name: "Bulbasaur",
  type: "grass",
  hp: 45,
  starter: true
});
console.log (game.party)

// Filter Pokémon based on specific criteria (e.g., type)
const selectedPokemon = pokemon.filter(p => p.type === "fire");

// Add the selected Pokémon to the party
game.party.push(...selectedPokemon.slice(0, 3));

console.log (game.party)