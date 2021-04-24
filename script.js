//Function that returns a random play (rock, paper or scissor)
const computerPlay = () => {
  const plays = ['rock', 'paper', 'scissor'];
  const randNum = Math.floor(Math.random() * plays.length);
  return plays[randNum];
};

//Human and computer scores
let playerScore = 0;
let computerScore = 0;

//Game round logic
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      computerScore++;
      return `You lose! Paper beats rock!`;
    } else if (computerSelection === 'scissor') {
      playerScore++;
      return `You win! Rock beats scissor!`;
    } else {
      return `It's a tie!`;
    }
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return `You Win! Paper beats rock!`;
    } else if (computerSelection === 'scissor') {
      computerScore++;
      return `You lose! Scissor beats Paper!`;
    } else {
      return `It's a tie!`;
    }
  }

  if (playerSelection === 'scissor') {
    if (computerSelection === 'rock') {
      computerScore++;
      return `You Lose! Rock beats scissor!`;
    } else if (computerSelection === 'paper') {
      playerScore++;
      return `You Win! Scissor beats Paper!`;
    } else {
      return `It's a tie!`;
    }
  }
};

//Game instance
const game = () => {
  //Loop for 5 rounds
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      'Type rock, paper or scissor!'
    ).toLowerCase();
    const computerSelection = computerPlay();

    //Log round results, score information and round number
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log(`Round: ${i + 1}`);
    console.log(`************************`);
  }

  //Console.log winner
  if (playerScore > computerScore) {
    console.log(`GAME OVER!!!!!`);
    console.log(`YOU WIN!!!!!`);
  } else {
    console.log(`GAME OVER!!!!!`);

    console.log(`You LOSE! =(`);
  }
};

//Start game
game();
