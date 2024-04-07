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

/*Exercise 1: When you’ve completed your inspection of the data, 
you can comment out the console.dir() method and use console.log() to log JUST the name of the Pokemon with the number 59
using the index of the Pokemon in the array.*/

console.log('Exercise 1 results:', pokemon[58].name);

//Exercise 2: Next, add the following console.log:

console.log('Exercise 2 results:', (game));

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Medium";
console.log ('Exercise 3 results:', game.difficulty)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

game.party.push({
  number: 1,
  name: "Bulbasaur",
  type: "grass",
  hp: 45,
  starter: true
});
console.log ('Exercise 4 results:', game.party)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

Solve Exercise 5 here:
*/

// Filter Pokémon based on specific criteria (e.g., type)
const selectedPokemon = pokemon.filter(p => p.type === "fire" || p.type === "water");

// Add the selected Pokémon to the party
game.party.push(...selectedPokemon.slice(0, 3));

game.party.forEach(pokemon => {
  
  console.log('Exercise 5 results:', pokemon.name);
});

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/

// Sort the Pokémon in game.party by their HP in descending order
game.party.sort((a, b) => b.hp - a.hp);

// Log the Pokémon in game.party after sorting
console.log('Exercise 6 results:', game.party);

/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/

// Loop through the gyms array to check and update the completed property
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

// Log the updated gyms array
console.log('Exercise 7 results:', game.gyms);


