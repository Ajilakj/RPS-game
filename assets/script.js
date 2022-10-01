//global variables
var option="RPS";
var scoreCard={
     tie: 0,
     user: 0,
     computer: 0
};


//checking whether the player want to conitnue? If yes start the game again
// else display the final scoreboard   
function finalScore(){
     var cont=confirm("Do you want to continue?")
     if(cont)
     {
          startGame();
     }
     else{
          alert("This is the final score card: You won "+scoreCard.user+ " times and computer won "+scoreCard.computer+" and "+scoreCard.tie+" ties.");
     }
}

//taking user input and checking it against computer's random selection
function startGame(){
     var userInput=prompt("Type 'r' for Rock:  Type 's' for scissors: Type 'p' for paper: Which one you want to select?").toUpperCase();
     var rand=Math.floor(Math.random()*(option.length));
     var computer=option[rand];
     alert("Computer selected: "+computer);
     if(userInput===computer){
          scoreCard.tie++;
          alert("It is a tie");
     }
     else if((userInput==='R' && computer==='S')||(userInput==='S' && computer==='P') ||(userInput==='P' && computer==='R')){
          scoreCard.user++;
          alert("You WON!!!");
     }
     else{
          scoreCard.computer++;
          alert("SORRY you lost");
     }
     finalScore();
}


//function call
startGame();
