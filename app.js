let userScore = 0;
let computerScore = 0;

//select score id's
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissor_div = document.getElementById('scissor');

//set a function that use Math.random to loop through an array and return that value
function getComputerChoice() {
   const choices = ["rock", "paper", "scissor"];
   const randomNum = Math.floor(Math.random() * 3);
   return choices[randomNum];

}


function convertCase() {
    if(myChoice === 'paper') return 'Paper';
    if(myChoice === 'scissor') return 'Scissor';
    return 'Rock'
    
}

//winning condition once it's clicked and the value is passed through the parameters

function win(user, computerScore) {
    userScore++

    userScore_span.innerHTML = userScore;
    const userName = ' (user)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>${convertCase(user)}${userName} beats ${convertCase(computer)}${compName}. You win!</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('winningStyles');
    setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
  }
  
  // Losing Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
  function loses(user, computer) {
    computerScore++;
    // console.log('computer score is ' + computerScore + ' ' + computer);
    computerScore_span.innerHTML = computerScore;
    const userName = ' (user)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>${convertCase(computer)}${compName} beats ${convertCase(user)}${userName}. You lose!</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('losingStyles');
    setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
  }
  
  // Draw Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
  function draw(user, computer) {
      const userName = ' (user)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>It was a draw! You both chose ${convertCase(user)}</p>`;
    // "It was a draw! You both chose " + user + " " + computer; // old js
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('drawStyles');
    setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
  }
  
  // The core game functions that set up and determine the games actual logic aka paper beats rock etc
  function game(userChoice) {
    const computerChoice = getComputerChoice();
    // console.log('Game function: user choice is = ' + userChoice);
    // console.log('Game function: computer choice is = ' + computerChoice);
  
    switch (userChoice + computerChoice) {
      case 'paperrock':
      case 'rockscissors':
      case 'scissorspaper':
        win(userChoice, computerChoice);
        // console.log("user wins");
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        loses(userChoice, computerChoice);
        // console.log("computer wins");
        break;
      case 'rockrock':
      case 'scissorsscissors':
      case 'paperpaper':
        draw(userChoice, computerChoice);
        // console.log("draw");
        break;
    }
  }
  // ES5 style of writing this function
  // function main() {
  //   rock_div.addEventListener('click', function() {
  //     game('rock');
  //   });
  
  //   paper_div.addEventListener('click', function() {
  //     game('paper');
  //   });
  
  //   scissors_div.addEventListener('click', function() {
  //     game('scissors');
  //   });
  // }
  
  // ES6 style of writing this function
  // This function creates and adds an eventlistener to the rock, paper scissors html element and the passes the value of that element to the game function
  function main() {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
  }
  
  main();
  
yy