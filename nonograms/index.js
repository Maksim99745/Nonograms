import games from "./nonograms.js";
import {randomGames, chooseRandom, randomEasyGames} from "./random.js";

let timerMinutes = 0;
let timerSecounds = 0;

let currentGameName = '';
let currentGameLevel = '';

let gameFieldLength = '';

const createElement = (elemType, elemClass, parentBlock) => {
  const newElem = document.createElement(elemType);

  if (elemClass) {
    newElem.classList.add(elemClass);
  }

  if (parentBlock) {
    parentBlock.appendChild(newElem);
  }

  return newElem;
};

const generateField = (
  nonogramRight,
  games,
  leftBlock,
  topHintBlock,
  level = "Easy",
  gameName = "plane",
) => {

  //set current level and game name

  currentGameName = gameName;
  currentGameLevel = level;

  //reset timer
  timerSecounds = 0;
  timerMinutes = 0;
  const timer = document.querySelector('.timer');
  timer.classList.add('timer-stop');
  timer.textContent = '00:00'

  //reset solution button
  const solution = document.querySelector('.solution');
  solution.textContent = 'Solution';
  
  if (solution.classList.contains('solution-opened')) {
    solution.classList.remove('solution-opened');
  }
  
  //choose game
  const currentGame = document.querySelector('.current-game');
  currentGame.textContent = `Current nonogram: ${gameName}`;

  const game = games[level][gameName].field;
  const hintMap = games[level][gameName].hint;

  let gameFiledWidth = Math.sqrt(game.length) * 5;

  gameFieldLength = gameFiledWidth;

  nonogramRight.style.setProperty("width", 30.4 * gameFiledWidth + "px");

  const playfieldsBlock = document.querySelector('.playfields-block');

  for (let f = 0; f < game.length; f += 1) {
    const playfield = createElement("div", "playfield", playfieldsBlock);
    // nonogramRight.appendChild(playfield);

    const playfields = nonogramRight.querySelectorAll(".playfield");
    const playfieldsArr = [];
    playfields.forEach((field) => {
      playfieldsArr.push(field);
    });

    for (let i = 0; i < 25; i += 1) {
      if (game[f][i] === "empty") {
        const emptyBLock = createElement("div", "empty-block");
        emptyBLock.classList.add("guessing-block");
        const span1 = createElement('span', 'guessing-block__span', emptyBLock);
        const span2 = createElement('span', 'guessing-block__span', emptyBLock);

        playfieldsArr[f].appendChild(emptyBLock);
      }
      if (game[f][i] === "fully") {
        const fullyBLock = createElement("div", "fully-block");
        fullyBLock.classList.add("guessing-block");
        const span1 = createElement('span', 'guessing-block__span', fullyBLock);
        const span2 = createElement('span', 'guessing-block__span', fullyBLock);

        playfieldsArr[f].appendChild(fullyBLock);
      }
    }
  }

  generateHints(leftBlock, topHintBlock, game, hintMap);
};

const generateHints = (leftBlock, topHintBlock, game, hintMap) => {

  const playfields = document.querySelectorAll(".playfield");
  const playfieldsArr = [];
  playfields.forEach((field) => {
    playfieldsArr.push(field);
  });

  const hintSize = Math.sqrt(playfields.length);

  const leftHintBlock = createElement('div', 'left-hint-block');
  leftBlock.appendChild(leftHintBlock);

  for (let h = 0; h < hintSize; h += 1) {
    for (let i = 0; i < 5; i += 1) {
      const hintBlock = createElement("div", "hint-block");
      leftHintBlock.appendChild(hintBlock);
    }
  }

  const guessingBlocks = document.querySelectorAll(".guessing-block");
  const guessingBlocksArr = [];
  guessingBlocks.forEach((block) => {
    guessingBlocksArr.push(block);
  });

  const leftHints = leftBlock.querySelectorAll(".hint-block");
  const leftHintsArr = [];
  leftHints.forEach((block) => {
    leftHintsArr.push(block);
  });

  let startRow = 0;

  for (let h = 0; h < hintSize * 5; h += 1) {
    let count = 0;

    for (let r = startRow; r < startRow + hintSize * 5; r += 1) {
      if (hintMap[r] === "fully") {
        count += 1;
      }

      if (hintMap[r + 1] && hintMap[r + 1] === "empty") {
        if (count !== 0) {
          const hint = createElement("div", "hint-simbol-left");
          hint.textContent = count;
          leftHintsArr[h].appendChild(hint);
        }
        count = 0;
      }

      if (r + 1 >= startRow + hintSize * 5) {
        if (count !== 0) {
          const hint = createElement("div", "hint-simbol-left");
          hint.textContent = count;
          leftHintsArr[h].appendChild(hint);
        }
        count = 0;
      }
    }
    startRow += hintSize * 5;
  }

  for (let i = 0; i < 5 * hintSize; i += 1) {
    const hintBlock = createElement("div", "hint-block-top");
    topHintBlock.appendChild(hintBlock);
  }

  const topHints = topHintBlock.querySelectorAll(".hint-block-top");
  const topHintsArr = [];
  topHints.forEach((block) => {
    topHintsArr.push(block);
  });

  for (let j = 0; j < topHintsArr.length; j += 1) {
    let count = 0;
    let gameCapacity = 0;

    if (hintSize === 1) {
      gameCapacity = 25;
    } else if (hintSize === 2) {
      gameCapacity = 100;
    } else if (hintSize === 3) {
      gameCapacity = 225;
    }

    for (let i = j; i < j + gameCapacity; i += hintSize * 5) {
      if (hintMap[i] === "fully") {
        count += 1;
      }

      if (hintMap[i + hintSize * 5] && hintMap[i + hintSize * 5] === "empty") {
        if (count !== 0) {
          const hint = createElement("div", "hint-simbol-right");
          hint.textContent = count;
          topHintsArr[j].appendChild(hint);
        }
        count = 0;
      }

      if (i + hintSize * 5 >= gameCapacity) {
        if (count !== 0) {
          const hint = createElement("div", "hint-simbol-right");
          hint.textContent = count;
          topHintsArr[j].appendChild(hint);
        }
        count = 0;
      }
    }
  }
  fixSizes();
};

const fixSizes = () => {
  const cellLength = document.querySelector('.empty-block').offsetHeight - 2;

  const topHints = document.querySelectorAll(".hint-block-top");
  const topHintsArr = [];
  topHints.forEach((block) => {
    topHintsArr.push(block);
  });

  let highestBLock = topHintsArr[0].childNodes.length;

  for (let i = 0; i < topHintsArr.length; i += 1) {
    if (topHintsArr[i].childNodes.length > highestBLock) {
      highestBLock = topHintsArr[i].childNodes.length;
    }
  }

  const leftHints = document.querySelectorAll(".hint-block");
  const leftHintsArr = [];

  leftHints.forEach((block) => {
    leftHintsArr.push(block);
  });

  for (let i = 0; i < leftHintsArr.length; i += 1) {
    if (leftHintsArr[i].childNodes.length > highestBLock) {
      highestBLock = leftHintsArr[i].childNodes.length;
    }
  }

  highestBLock = highestBLock * cellLength;

  if (highestBLock < 62) {
    highestBLock = 62;
  }

  let gameFiledWidth = gameFieldLength * (cellLength + 2.4);

  const rightSide = document.querySelector('.nonongram-right');
  rightSide.style.width = gameFiledWidth + 'px';

  const topHintBlock = document.querySelector(".top-hint-block");
  topHintBlock.style.height = highestBLock + 1 + "px";

  const leftPart = document.querySelector(".nonongram-left");
  leftPart.style.width = highestBLock + "px";

  const filler = document.querySelector(".filler");
  filler.style.height = highestBLock + 1 + "px";
  filler.style.width = highestBLock - 1 + "px";
};

window.addEventListener('resize', () => {
  fixSizes();
});

const chooseBlack = (e, guessingBlocks) => {

  const solution = document.querySelector('.solution');
  
  if (!solution.classList.contains('solution-opened')) {

    const timer = document.querySelector('.timer');
    if (timer.classList.contains('timer-stop')) {
      timer.classList.remove('timer-stop');
    }
  
    if (e.target.classList.contains("block-crossed")) {
      e.target.classList.remove("block-crossed");
    }
    if (e.target.classList.contains("block-chosen")) {
      cleanCellSound();
    } else {
      clickSound();
    }
    e.target.classList.toggle("block-chosen");
    isGameOver(guessingBlocks);
  }

};


const chooseCross = (e, guessingBlocks) => {

  const solution = document.querySelector('.solution');
  
  if (!solution.classList.contains('solution-opened')) {

    const timer = document.querySelector('.timer');
    if (timer.classList.contains('timer-stop')) {
      timer.classList.remove('timer-stop');
    }
  
    if (e.target.classList.contains("block-chosen")) {
      e.target.classList.remove("block-chosen");
    }

    if (e.target.classList.contains("block-crossed")) {
      cleanCellSound();
    } else {
      crossSound();
    }

    e.target.classList.toggle("block-crossed");
    isGameOver(guessingBlocks);

  }
};

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('guessing-block')) {
    const guessingBlocks = document.querySelectorAll(".guessing-block");
    chooseBlack(e, guessingBlocks);
  }
})

document.addEventListener("contextmenu", (e) => {
  if (e.target.classList.contains('guessing-block')) {
    const guessingBlocks = document.querySelectorAll(".guessing-block");
    chooseCross(e, guessingBlocks);
    e.preventDefault();
  }
  if (e.target.classList.contains('playfield')) {
    e.preventDefault();
  }
})


const isGameOver = (guessingBlocks) => {

  const guessingBlocksArr = [];
  const fullyBLocks = [];
  const emptyBlocks = [];
  guessingBlocks.forEach((block) => {
    guessingBlocksArr.push(block);

    if (block.classList.contains("empty-block")) {
      emptyBlocks.push(block);
    }

    if (block.classList.contains("fully-block")) {
      fullyBLocks.push(block);
    }
  });

  const isBlack = (block) => block.classList.contains("block-chosen");
  const isClean = (block) => !block.classList.contains('block-chosen')

  if (fullyBLocks.every(isBlack) && emptyBlocks.every(isClean)) {
    const chooseGameClose = document.querySelector('.game-list_close');
    chooseGameClose.classList.add('game-list_close-inactive');
    callGameoverModal();

  }
};

const callGameoverModal = () => {

  const time = timerMinutes * 60 + timerSecounds;
  const message = `Great! You have solved the nonogram in ${time} seconds!`;
  const timer = document.querySelector('.timer');
  timer.classList.add('timer-stop');

  timerMinutes = 0;
  timerSecounds = 0;

  const gameoverModal = document.querySelector('.gameover__modal');
  const gameOverMessage = document.querySelector('.gameover__message');
  gameOverMessage.textContent = message;
  gameoverModal.classList.add('gameover__modal-opened');

  const scoreMessage = {
    message:`Name: ${currentGameName}, level: ${currentGameLevel.toLowerCase()}, ${time} secounds`,
    time: time,
  }
 
  const array = JSON.parse(localStorage.getItem('results'))

  array.push(JSON.stringify(scoreMessage))

  if (array.length > 5) {
    array.shift()
  }

  localStorage.setItem('results', JSON.stringify(array))

  winSound();
  writeScore();
};


const writeScore = () => {
  const recordsScore = document.querySelector('.records-score__right');

  while(recordsScore.firstChild) {
    recordsScore.removeChild(recordsScore.firstChild);
  }
  
  const values = JSON.parse(localStorage.getItem('results'))

  const properObject = values.map(value => JSON.parse(value))

  properObject.sort((a,b) => a.time - b.time).forEach(value => {
    const scoreRecord = createElement('div', 'redords-window__record', recordsScore);
    scoreRecord.textContent = value.message;
  })
}

const saveLastGame = () => {
  const currentSecound = timerSecounds;
  const currentMinutes = timerMinutes;

  const gameName = currentGameName;
  const gameLevel = currentGameLevel;

  const playfieldBlock = document.querySelector('.playfields-block');
  const playfieldBlockHTML = playfieldBlock.innerHTML;

  const lastGameData = {
    seconds: currentSecound,
    minutes: currentMinutes,
    gameName: gameName,
    gameLevel: gameLevel,
    gameField: playfieldBlockHTML,
  };

  const lastGameJSON = JSON.stringify(lastGameData);
  localStorage.setItem('lastGame', lastGameJSON);

  const saveButtonText = document.querySelector('.save-button__text');
  saveButtonText.style.opacity = 0;

  setTimeout(() => {
    saveButtonText.style.opacity = 1;
    saveButtonText.textContent = 'Success';
  }, 1000)

  setTimeout(() => {
    saveButtonText.style.opacity = 0;
    setTimeout(() => {
      saveButtonText.style.opacity = 1;
      saveButtonText.textContent = 'Save game';
    }, 1000)
  }, 2000)

};

const continueLastGame = () => {

  const lastGameData = JSON.parse(localStorage.getItem('lastGame'));

  //restore game name and level
  currentGameName = lastGameData.gameName;
  currentGameLevel = lastGameData.gameLevel;

  // restore playfield and hints

  cleanField();
  const nonogramRight = document.querySelector('.nonongram-right');
  const nonogramLeft = document.querySelector('.nonongram-left');
  const topHintBlock = document.querySelector('.top-hint-block');

  generateField(nonogramRight, games, nonogramLeft, topHintBlock, currentGameLevel, currentGameName);

  //restore time
  timerSecounds = lastGameData.seconds;
  timerMinutes = lastGameData.minutes;

  const timerBlock = document.querySelector('.timer');

  let seconds = timerSecounds;
  if (timerSecounds < 10) {
    seconds = `0${timerSecounds}`
  } 
  let minutes = timerMinutes
  if (timerMinutes < 10) {
    minutes = `0${timerMinutes}`
  } 

  timerBlock.textContent = `${minutes}:${seconds}`;
  
  setTimeout(() => {
    const timer = document.querySelector('.timer');
    timer.classList.add('timer-stop');
  }, 1000)

  //restore name block

  const nameBlock = document.querySelector('.current-game');
  nameBlock.textContent = `Current nonogram: ${currentGameName}`

  //restore playfield

  const nonogram = document.querySelector('.nonongram');
  
  const playfieldBlock = document.querySelector('.playfields-block');
  playfieldBlock.innerHTML = lastGameData.gameField;
  fixSizes();

  const continueButtonText = document.querySelector('.continue-button__text');
  continueButtonText.style.opacity = 0;

  setTimeout(() => {
    continueButtonText.style.opacity = 1;
    continueButtonText.textContent = 'Success';
  }, 1000)

  setTimeout(() => {
    continueButtonText.style.opacity = 0;
    setTimeout(() => {
      continueButtonText.style.opacity = 1;
      continueButtonText.textContent = 'Continue last game';
    }, 1000)
  }, 2000)
};

const openGameList = () => {
  const gameList = document.querySelector('.game-list__modal')
  gameList.classList.add("game-list__modal-opened");
};

const chooseGame = (e, nonogramRight, games, nonogramLeft, topHintBlock) => {
  closeModal();

  //restore game-list close button
  const chooseGameClose = document.querySelector('.game-list_close');
  if (chooseGameClose.classList.contains('game-list_close-inactive')) {
    chooseGameClose.classList.remove('game-list_close-inactive');
  }

  const gamesNodeList = document.querySelectorAll(".game-level__game");
  const gamesArr = [];
  gamesNodeList.forEach((game) => {
    gamesArr.push(game);
  });

  const gameName = e.target.innerHTML;
  const level = e.target
    .closest(".game-list__level")
    .querySelector(".game-level__header").innerHTML;

  generateField(
    nonogramRight,
    games,
    nonogramLeft,
    topHintBlock,
    level,
    gameName,
  );
};

const chooseRandomGame = (nonogramRight, games, nonogramLeft, topHintBlock) => {
  closeModal();
  closeGameoverModal();
  cleanField();

  //restore game-list close button
  const chooseGameClose = document.querySelector('.game-list_close');
  if (chooseGameClose.classList.contains('game-list_close-inactive')) {
    chooseGameClose.classList.remove('game-list_close-inactive');
  }

  const randomGameData = chooseRandom(randomGames);
  const randomLevel = randomGameData.level;
  const randomGameName = randomGameData.name;

  generateField(nonogramRight, games, nonogramLeft, topHintBlock, randomLevel, randomGameName);
}

const cleanField = () => {

  const leftblock = document.querySelector('.nonongram-left');
  const leftHintBlock = document.querySelector('.left-hint-block');
  leftblock.removeChild(leftHintBlock);

  const playfieldsBlock = document.querySelector('.playfields-block');
  const hintBlockTop = document.querySelector('.top-hint-block');

  while (hintBlockTop.firstChild) {
    hintBlockTop.removeChild(hintBlockTop.firstChild);
  }

  while (playfieldsBlock.querySelector('.playfield')){
    const playfield = document.querySelector('.playfield');
    playfieldsBlock.removeChild(playfield);
  }

  const gamesMenu = document.querySelector('.game-list');
  gamesMenu.classList.remove('game-list-opened');
}

const closeModal = () => {
  // if ()
  const gameListModal = document.querySelector('.game-list__modal');
  gameListModal.classList.remove("game-list__modal-opened");
}

const closeGameoverModal = () => {
  const gameoverModal = document.querySelector('.gameover__modal');
  gameoverModal.classList.remove("gameover__modal-opened");
}

const restartGame = () => {
  timerSecounds = 0;
  timerMinutes = 0;
  const timer = document.querySelector('.timer');
  timer.textContent = '00:00'
  timer.classList.add('timer-stop');

  const solution = document.querySelector('.solution');
  solution.textContent = 'Solution';
  solution.classList.remove('solution-opened');

  const guessingBlocks = document.querySelectorAll(".guessing-block");
  const guessingBlocksArr = [];
  guessingBlocks.forEach((block) => {
    guessingBlocksArr.push(block);
  });

  for (let i = 0; i < guessingBlocksArr.length; i += 1) {
    if (guessingBlocksArr[i].classList.contains('block-chosen')) {
      guessingBlocksArr[i].classList.remove('block-chosen')
    }
    if (guessingBlocksArr[i].classList.contains('block-crossed')) {
      guessingBlocksArr[i].classList.remove('block-crossed')
    }
  }
  
}

const runTimer = () => {
  const timer = document.querySelector('.timer');
  timerSecounds += 1;

  if (timerSecounds > 59) {
    timerSecounds = 0;
    timerMinutes += 1;
  }

  if (timerMinutes > 59) {
    timerSecounds = 0;
    timerMinutes = 0;
  }


  let seconds = timerSecounds;
  if (timerSecounds < 10) {
    seconds = `0${timerSecounds}`
  } 
  let minutes = timerMinutes
  if (timerMinutes < 10) {
    minutes = `0${timerMinutes}`
  } 


  timer.textContent = `${minutes}:${seconds}`;
}

const showSolution = () => {

  const solution = document.querySelector('.solution');

  if (!solution.classList.contains('solution-opened')) {

    restartGame();

    solution.classList.add('solution-opened');
  
    timerSecounds = 0;
    timerMinutes = 0;
    const timer = document.querySelector('.timer');
    timer.textContent = '00:00'
    timer.classList.add('timer-stop');
  
    const guessingBlocks = document.querySelectorAll(".guessing-block");
    const guessingBlocksArr = [];
    guessingBlocks.forEach((block) => {
      guessingBlocksArr.push(block);
    });
  
    for (let i = 0; i < guessingBlocksArr.length; i += 1) {
      if (guessingBlocksArr[i].classList.contains('fully-block')) {
        guessingBlocksArr[i].classList.add('block-chosen')
      }
    }
    setTimeout(() => {
      solution.textContent = 'Choose another game';
    }, 1100)
  }
}

const callRecordsModal = () => {
  const recordsModal = document.querySelector('.records-modal');
  recordsModal.classList.add('records-modal__opened');
};

const closeRecordsModal = () => {
  const recordsModal = document.querySelector('.records-modal');
  recordsModal.classList.remove('records-modal__opened');
}

const nightMode = () => {
  const nightButton = document.querySelector('.night-button');
  nightButton.classList.toggle('night-button-on');

  if (nightButton.classList.contains('night-button-on')) {
    document.documentElement.style.setProperty('--background-color', '#1c1c1c');
    document.documentElement.style.setProperty('--border-color', '#ffffff');
  } else {
    document.documentElement.style.setProperty('--background-color', '#ffffff');
    document.documentElement.style.setProperty('--border-color', '#1c1c1c');
  }
}

const controlSound = () => {
  const soundButton = document.querySelector('.sound-button');
  soundButton.classList.toggle('sound-button-on');

  if (soundButton.classList.contains("sound-button-on")) {
    soundButton.textContent = 'Sound-on';
  } else {
    soundButton.textContent = 'Sound-off';
  }
}

const controlBurger = () => {
  const burgerButton = document.querySelector('.burger-button');
  burgerButton.classList.toggle('burger-button_closed');

  const burgerFormButtons = document.querySelector('.header-buttons');
  burgerFormButtons.classList.toggle('header-buttons__opened');
}

const closeBurger = () => {
  const burgerFormButtons = document.querySelector('.header-buttons');
  if (burgerFormButtons.classList.contains('header-buttons__opened')) {
    burgerFormButtons.classList.remove('header-buttons__opened');
  }

  const burger = document.querySelector('.burger-button');
  if (!burger.classList.contains('burger-button_closed')) {
    burger.classList.add('burger-button_closed');
  }
}


const body = document.querySelector("body");


// Generate gameplay
document.addEventListener("DOMContentLoaded", () => {
  const header = createElement("header");

  const h1 = createElement("h1", "title");
  h1.textContent = "Nonograms";
  header.appendChild(h1);

  const buttonsContainer = createElement('div', 'header-buttons', header);

  const burgerButton = createElement('div', 'burger-button', header);
  burgerButton.classList.add('burger-button_closed');
  const burgerButtonSpan1 = createElement('span', 'burger-button__span', burgerButton);
  const burgerButtonSpan2 = createElement('span', 'burger-button__span', burgerButton);

  burgerButton.addEventListener("click", () => {
    controlBurger();
  })

  const nightModeButton = createElement('div', 'night-button', buttonsContainer);

  nightModeButton.addEventListener('click', () => {
    closeBurger();
    nightMode();
  })

  const soundButton = createElement('div', 'sound-button', buttonsContainer);
  soundButton.textContent = 'Sound-off';
  soundButton.addEventListener('click', () => {
    closeBurger();
    controlSound()
  })

  const recordsButton = createElement('div', 'records-head', buttonsContainer);
  recordsButton.textContent = "Score";
  recordsButton.addEventListener('click', () => {
    closeBurger();
    callRecordsModal();
  })

  const randomHeaderButton = createElement("div", "random-header", buttonsContainer);
  randomHeaderButton.textContent = "Random";
  

  const restartButton = createElement('div', 'restart-header', buttonsContainer);
  restartButton.textContent = "Reset";
  restartButton.addEventListener('click', () => {
    closeBurger();
    restartGame();
  })

  randomHeaderButton.addEventListener('click', () => {
    closeBurger();
    chooseRandomGame(nonogramRight, games, nonogramLeft, topHintBlock);
  })

  const gamesButton = createElement("div", "games-button", buttonsContainer);
  gamesButton.textContent = "Games";

  const bodyWrapper = createElement('div', 'body-wrapper', body);

  bodyWrapper.appendChild(header);

  const main = createElement("main");

  const timerContainer = createElement("div", "timer-container", main);

  const nonogramConteiner = createElement("div", "nonongram", main);

  const nonogramLeft = createElement("div", "nonongram-left");
  const greyFiller = createElement("div", "filler", nonogramLeft);
  nonogramConteiner.appendChild(nonogramLeft);

  const nonogramRight = createElement("div", "nonongram-right");
  const topHintBlock = createElement("div", "top-hint-block", nonogramRight);
  const playfieldsBLock = createElement("div", "playfields-block", nonogramRight);

  nonogramConteiner.appendChild(nonogramRight);

  bodyWrapper.appendChild(main);

  const randomGameData = chooseRandom(randomEasyGames);
  const randomLevel = randomGameData.level;
  const randomGameName = randomGameData.name;

  const currentGame = createElement('div', 'current-game', timerContainer);

  const timer = createElement('div', 'timer', timerContainer);
  timer.textContent = '00:00';
  timer.classList.add('timer-stop');

  setInterval(() => {
    if (!timer.classList.contains('timer-stop')) {
      runTimer();
    }
  }, 1000)

  const saveContainer = createElement('div', 'save-container', timerContainer)

  const saveButton = createElement('div', 'save-button', saveContainer);
  const saveButtonText = createElement('p', 'save-button__text', saveButton);
  saveButtonText.textContent = 'Save game';

  saveButton.addEventListener('click', () => {

    const solutionButton = document.querySelector('.solution');
    if (!solutionButton.classList.contains('solution-opened')) {
      saveLastGame();
    }
  })

  const continueButton = createElement('div', 'continue-button', saveContainer);
  const continueButtonText = createElement('p', 'continue-button__text', continueButton);
    continueButtonText.textContent = 'Continue last game';

  continueButton.addEventListener('click', () => {
    if (localStorage.getItem('lastGame')) {
      continueLastGame();
    }
  })

  const solution = createElement('div', 'solution', nonogramConteiner);
  solution.textContent = 'Solution';

  solution.addEventListener('click', () => {
    showSolution();
  })

  generateField(nonogramRight, games, nonogramLeft, topHintBlock, randomLevel, randomGameName);

  //games modal

  const gameListModal = createElement('div', 'game-list__modal');

  const gameList = createElement("div", "game-list", gameListModal);
  const gameListOverlay = createElement("div", 'game-list__overlay', gameListModal);

  //gameover modal

  const gameOverModal = createElement('div', 'gameover__modal', main);

  const gameOverWindow = createElement("div", "gameover__window", gameOverModal);
  const gameOverMessage = createElement("div" , 'gameover__message', gameOverWindow);

  const gameOverNewGame = createElement('div', 'gameover__new-game', gameOverWindow);
  gameOverNewGame.textContent = 'Choose new game';
  gameOverNewGame.addEventListener('click', () => {
    closeGameoverModal();
    openGameList();
  })


  const gameOverRandom = createElement('div', 'gameover__random', gameOverWindow)
  gameOverRandom.textContent = 'Random game';

  gameOverRandom.addEventListener('click', () => {
    chooseRandomGame(nonogramRight, games, nonogramLeft, topHintBlock);
  })


  const gameOverOverlay = createElement("div", 'gameover__overlay', gameOverModal);

  gameListOverlay.addEventListener('click', () => {
    if (!closeGameMenu.classList.contains('game-list_close-inactive'))
    closeModal();
  })

  const easy = createElement("div", "game-list__level");
  const easyHeader = createElement("div", "game-level__header");
  easyHeader.textContent = "Easy";
  easy.appendChild(easyHeader);

  const easyGames = ["smile", "police", "lattice", "plane", "mushroom"];
  for (let item of easyGames) {
    const game = createElement("div", "game-level__game");
    game.textContent = item;
    easy.appendChild(game);
  }

  const normal = createElement("div", "game-list__level");
  const normalHeader = createElement("div", "game-level__header");
  normal.classList.add('game-level__header_normal')
  normalHeader.textContent = "Normal";
  normal.appendChild(normalHeader);

  const normalGames = ["question", "house", "melody", "tv", "leaf"];
  for (let item of normalGames) {
    const game = createElement("div", "game-level__game");
    game.textContent = item;
    normal.appendChild(game);
  }

  const hard = createElement("div", "game-list__level");
  const hardHeader = createElement("div", "game-level__header");
  hardHeader.textContent = "Hard";
  hard.appendChild(hardHeader);

  const hardGames = ["mouse", "duck", "deer", "flowers", "castle"];
  for (let item of hardGames) {
    const game = createElement("div", "game-level__game");
    game.textContent = item;
    hard.appendChild(game);
  }

  const levelsContainer = createElement('div', 'levels-container', gameList);
  levelsContainer.appendChild(easy);
  levelsContainer.appendChild(normal);
  levelsContainer.appendChild(hard);

  const gamesModalRandom = createElement('div', 'levels-random', gameList);
  gamesModalRandom.textContent = 'Random';

  gamesModalRandom.addEventListener('click', () => {
    chooseRandomGame(nonogramRight, games, nonogramLeft, topHintBlock);
  })

  const closeGameMenu = createElement("div", "game-list_close", gameList);
  closeGameMenu.addEventListener("click", () => {
    closeModal();
  });

  main.appendChild(gameListModal);

  const recordsModal = createElement('div', 'records-modal', main);
  const recordsWindow = createElement('div', 'records-window', recordsModal);
  const recordsHeader = createElement('div', 'records-header', recordsWindow);
  recordsHeader.textContent = "High core table";
  const recordsScoreTable = createElement('div', 'records-score', recordsWindow)
  const recordsScoreLeft = createElement('div', 'records-score__left', recordsScoreTable);

  const recordsFirst = createElement('div', 'records-place', recordsScoreLeft);
  recordsFirst.textContent = '1st.';
  const recordsSecound = createElement('div', 'records-place', recordsScoreLeft);
  recordsSecound.textContent = '2nd.';
  const recordsThird = createElement('div', 'records-place', recordsScoreLeft);
  recordsThird.textContent = '3rd.';
  const recordsFourth = createElement('div', 'records-place', recordsScoreLeft);
  recordsFourth.textContent = '4th.';
  const recordsFifth = createElement('div', 'records-place', recordsScoreLeft);
  recordsFifth.textContent = '5th.';
  
  const recordsScoreRight = createElement('div', 'records-score__right', recordsScoreTable);
  const recordsHide = createElement('div', 'records-hide', recordsWindow);
  recordsHide.textContent = 'Hide';

  recordsHide.addEventListener('click', () => {
    closeRecordsModal();
  })

  const recordsOverlay = createElement('div', 'records-overlay', recordsModal)
  recordsOverlay.addEventListener('click', () => {
    closeRecordsModal();
  })

  if (!localStorage.getItem('results')) {
    localStorage.setItem('results', JSON.stringify([]))
  }

  writeScore();

  gamesButton.addEventListener("click", () => {
    closeBurger();
    openGameList();
  });

  const gamesNodeList = document.querySelectorAll(".game-level__game");

  gamesNodeList.forEach((game) => {
    game.addEventListener("click", (e) => {
      cleanField();
      chooseGame(e, nonogramRight, games, nonogramLeft, topHintBlock);
    });
  });
});

const clickSound = () => {
  const click = new Audio();
  click.src = "assets/audio/clickSound.wav";

  const soundButton = document.querySelector('.sound-button');
  if (soundButton.classList.contains('sound-button-on')) {
      click.play();
  }
};

const crossSound = () => {
  const cross = new Audio();
  cross.src = "assets/audio/crossSound.mp3"

  const soundButton = document.querySelector('.sound-button');
  if (soundButton.classList.contains('sound-button-on')) {
      cross.play();
  }
}

const cleanCellSound = () => {
  const clean = new Audio();
  clean.src = "assets/audio/cleanSound.mp3";

  const soundButton = document.querySelector('.sound-button');
  if (soundButton.classList.contains('sound-button-on')) {
      clean.play();
  }
}

const winSound = () => {
  const win = new Audio();
  win.src = "assets/audio/winSound.mp3";

  const soundButton = document.querySelector('.sound-button');
  if (soundButton.classList.contains('sound-button-on')) {
      win.play();
  }
}
