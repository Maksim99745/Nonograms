export const randomGames = [
  {
    level: 'Easy',
    name: 'smile',
  },
  {
    level: 'Easy',
    name: 'police',
  },
  {
    level: 'Easy',
    name: 'lattice',
  },
  {
    level: 'Easy',
    name: 'plane',
  },
  {
    level: 'Easy',
    name: 'mushroom',
  },
  {
    level: 'Normal',
    name: 'question',
  },
  {
    level: 'Normal',
    name: 'house',
  },
  {
    level: 'Normal',
    name: 'melody',
  },
  {
    level: 'Normal',
    name: 'tv',
  },
  {
    level: 'Normal',
    name: 'leaf',
  },
  {
    level: 'Hard',
    name: 'mouse',
  },
  {
    level: 'Hard',
    name: 'duck',
  },
  {
    level: 'Hard',
    name: 'deer',
  },
  {
    level: 'Hard',
    name: 'flowers',
  },
  {
    level: 'Hard',
    name: 'castle',
  },
];

export const randomEasyGames = [
  {
    level: 'Easy',
    name: 'smile',
  },
  {
    level: 'Easy',
    name: 'police',
  },
  {
    level: 'Easy',
    name: 'lattice',
  },
  {
    level: 'Easy',
    name: 'plane',
  },
  {
    level: 'Easy',
    name: 'mushroom',
  },
];

export const chooseRandom = (randomGames) => {
  
  const index = Math.floor(Math.random() * randomGames.length);
  
  return randomGames[index];
};