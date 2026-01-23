const displayScore = document.querySelector('.score')
const resultComputer = document.querySelector('.result-computer')
const resultPlayer = document.querySelector('.result-player')
const result = document.querySelector('.result')

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')

let computerMove = '';
let playerMove = '';
let score = localStorage.getItem('score') ??  0;
if(score < 0){
    score = 0;
}

rock.addEventListener('click',()=>{
    compMove();
    playMove('rock');
    compareResult();
})
paper.addEventListener('click',()=>{
    compMove();
    playMove('paper');
    compareResult();
})
scissor.addEventListener('click',()=>{
    compMove();
    playMove('scissors');
    compareResult();
})

function playGame(choose){
    compMove();
    playerMove();
    
}


function saveToStorage(){
    localStorage.setItem('score',score)
}

function compMove(){
  const randomNum = Math.random()
  if(randomNum < 1/3){
    computerMove = 'rock';
  }else if(randomNum > 1/3 && randomNum <=2/3){
    computerMove ='paper';
  }else{
    computerMove ='scissors'
  }
 
  resultComputer.innerHTML =`Computer : <img src="${computerMove}-emoji.png" />`
  return computerMove;
}

function playMove(choose){
   if(choose === 'rock'){
        playerMove ='rock'
   }
   if(choose === 'paper'){
    playerMove ='paper'
   }
   if(choose === 'scissors'){
    playerMove = 'scissors'
   }
   
    resultPlayer.innerHTML =`Player : <img src="${playerMove}-emoji.png" />`
   return playerMove
}

function compareResult(){
    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result.textContent = 'Draw'
        }else if(computerMove === 'paper'){
              result.textContent = 'You Lose'
              score--;
        }else if(computerMove === 'scissors'){
               result.textContent = 'You win'
                 score++;
        }
    }
    if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result.textContent = 'You win'
              score++;
        }else if(computerMove === 'paper'){
              result.textContent = 'Draw'
        }else if(computerMove === 'scissors'){
              result.textContent = 'You Lose'
              score--;
        }
}

         if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
              result.textContent = 'You Lose'
              score--;
        }else if(computerMove === 'paper'){
              result.textContent = 'You win'
              score++;
        }else if(computerMove === 'scissors'){
              result.textContent = 'Draw'
        }
}       
       saveToStorage();
        displayScore.textContent =`Score :${score}`

   

}