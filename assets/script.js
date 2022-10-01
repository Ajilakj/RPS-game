
var option="rps";
var scoreCard={
     tie: 0,
     user: 0,
     computer: 0
};


function startGame(){
     var userInput=prompt("Type 'r' for Rock:  Type 's' for scissors: Type 'p' for paper: Which one you want to select?");
     var rand=Math.floor(Math.random()*(option.length));
     var computer=option[rand];
     alert("Computer select: "+computer);
     if(userInput===computer){
          scoreCard.tie++;
          //alert("tie"+scoreCard.tie);
     }
     else if((userInput==='r' && computer==='s')||(userInput==='s' && computer==='p') ||(userInput==='p' && computer==='r')){
               scoreCard.user++;
               //alert("user"+scoreCard.user);
          }
     else{
          scoreCard.computer++;
          //alert(scoreCard.computer);
     }
     finalScore();
}
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
startGame();


// if one is R and other is P. P win
// if one is R and other is S. R win
// if one is S and other is P. S win
// display the message based on the rule
// allow user to select whether he want to play again or not
// if user want to continue restart the steps again
// if user doesn't want to continue display a bye message


//function call