let pWin = 0
let cWin = 0
let playerSelection ="";
const choices = ["Rock", "Paper", "Scissors"]
let computerSelection ="";
let body = document.querySelector('body');

        // Randomly Generates Computers choice 
        function computerPlay(choices) {
            return choices[Math.floor(Math.random()*choices.length)];
        }

        // Plays a single round and returns outcome


        function playRound(playerSelection , computerSelection){
            let ps = playerSelection
            let cs = computerSelection
                if ((ps == "Rock" && cs == "Scissors") ||(ps == "Scissors" && cs == "Paper") || (ps == "Paper" && cs == "Rock")) {
                    pWin++;
                    display.textContent = `Player:  ${pWin}, Comp:  ${cWin} \r\n...`;
                    display.textContent += `You Win! ${ps} beats ${cs}`;
                    
                } else if (ps === cs) {
                    display.textContent = `Player:  ${pWin}, Comp:  ${cWin} \r\n...`;
                    display.textContent += 'Draw! Try Again';
                } else {
                    cWin++;
                    display.textContent = `Player:  ${pWin}, Comp:  ${cWin} \r\n...`;
                    display.textContent += `You lose. ${cs} beats ${ps}`;
                
            };
        }

        function playGame(playerSelection, computerSelection) {
            if (pWin == 5){
                display.textContent = 'Congrats! You win!';
                pWin == 0;
                cWin == 0;
            } else if (cWin == 5) {
                display.textContent = 'You lose! Try again'
                pWin == 0;
                cWin == 0;
            } else {
                playRound(playerSelection, computerSelection);
            }
        }
/*
        //Plays 5 rounds 
        function game() {
            const choices = ["Rock", "Paper", "Scissors"]
            let x = 0 
                while (x < 5){
                let playerSelection = prompt("Rock, paper, or scissors?")
                let computerSelection = computerPlay(choices)
                console.log(playRound(playerSelection , computerSelection));
                x++;
                }
            whosWinGame(pWin,cWin);
         }   
    
*/



        
        // Determines who wins the game as a whole
        function whosWinGame(x,y,){
            if (x > y) {
                console.log("Player: ", x , "Computer: ", y)
                console.log("You win the game!");
            } else if (y > x) {
                console.log("Player: ", x , "Computer: ", y)
                console.log("You lose the game.");
            } else {
                console.log("Draw! Play again?");
            }
        }

        //Adds playable selection buttons, plays round. 
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                
                playerSelection = button.id;
                computerSelection = computerPlay(choices);
                playGame(playerSelection, computerSelection);
                });
                
            });
      

        const display = document.createElement('div');
        body.appendChild(display);
        
        
        
  
