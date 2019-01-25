let boxState = []; //boxState is kinda redundant atm.
let sign = "";
let count = 0;
const word = ["player 1", "player 2"];

// to make each box clickable
for(let i=0; i < 9; i++){
    const boxes = document.getElementsByClassName("box")[i];
    boxes.onclick = function (event){
        count = count + 1; 

        // to find out which box was clicked
        boxClickedOn = event.target;
        // console.log(event.target)

        // to find out the id of the box clicked
        boxState.push(event.target.getAttribute("id"));
        // console.log(boxState);

        // to insert X/O in the box clicked
        signToUse = clickCount(count);

        // to disallow player to choose the same box
        if (boxClickedOn.innerHTML == "X" ||boxClickedOn.innerHTML =="O"){
            // if click not valid, do not update count & boxState
            count = count - 1;
            boxState.pop();   
            alert("You have already chose that panel. Choose other panels.")
        }
        else{
            boxClickedOn.innerHTML = signToUse;
            // to assign X = red & O = blue;
            if (signToUse == "X") {
                boxClickedOn.classList.add('red');
            } 
            else {
                boxClickedOn.classList.add('blue');
            }         
        }
        checkWon();
    };      
}

 // if click count is odd number = player 1, even number = player 2
 function clickCount(count){
    if(count == 1 || count == 3 || count == 5 || count == 7 || count == 9){
        sign="X";  
        return sign;
    }
    else{
        sign="O";
        return sign 
    }
 } 

// winning combinations
function checkWon(){
    if (box1.innerHTML == "X" &&
        box2.innerHTML  == "X" &&
        box3.innerHTML  == "X"){
        alert(word[0] + " Won !");
    }
    else if (box4.innerHTML == "X" &&
        box5.innerHTML  == "X" &&
        box6.innerHTML  == "X" ){
        alert(word[0] + " Won !");
    }
    else if  (box7.innerHTML == "X" &&
        box8.innerHTML  == "X" &&
        box9.innerHTML  == "X" ){
        alert(word[0] + " Won !");
    }
    else if  (box1.innerHTML == "X" &&
        box4.innerHTML  == "X" &&
        box7.innerHTML  == "X" ){
        alert(word[0] + " Won !");
    }
    else if  (box2.innerHTML == "X" &&
        box5.innerHTML  == "X" &&
        box8.innerHTML  == "X" ){
        alert(word[0] + " Won !");
    }
    else if  (box3.innerHTML == "X" &&
        box6.innerHTML  == "X" &&
        box9.innerHTML  == "X" ){
        alert(word[0] + " Won !");
    }
    else if  (box1.innerHTML == "X" &&
        box5.innerHTML  == "X" &&
        box9.innerHTML  == "X" ){
        alert(word[0] + " Won !");
    }
    else if (box3.innerHTML == "X" &&
        box5.innerHTML  == "X" &&
        box7.innerHTML  == "X" ){
        alert(word[0] + " Won !");
    }
    //losing combinations
    else if (box1.innerHTML == "O"  &&
        box2.innerHTML  == "O" &&
        box3.innerHTML  == "O" ){
        alert(word[1]+ " Won !");
    }
    else if (box4.innerHTML == "O" &&
        box5.innerHTML  == "O" &&
        box6.innerHTML  == "O" ){
        alert(word[1]+ " Won !");
    }
    else if  (box7.innerHTML == "O" &&
        box8.innerHTML  == "O" &&
        box9.innerHTML  == "O" ){
        alert(word[1]+ " Won !");
    }
    else if  (box1.innerHTML == "O" &&
        box4.innerHTML  == "O" &&
        box7.innerHTML  == "O" ){
        alert(word[1]+ " Won !");
    }
    else if  (box2.innerHTML == "O" &&
        box5.innerHTML  == "O" &&
        box8.innerHTML  == "O" ){
        alert(word[1]+ " Won !");
    }
    else if  (box3.innerHTML == "O" &&
        box6.innerHTML  == "O" &&
        box9.innerHTML  == "O" ){
        alert(word[1]+ " Won !");
    }
    else if  (box1.innerHTML == "O" &&
        box5.innerHTML  == "O" &&
        box9.innerHTML  == "O" ){
        alert(word[1]+ " Won !");
    }
    else if (box3.innerHTML == "O" &&
        box5.innerHTML  == "O" &&
        box7.innerHTML  == "O" ){
        alert(word[1]+ " Won !");
    }
    else if (count >= 9){
        alert("It's a tie ! ");
    }
}
        
// to play again

const playAgain = document.getElementById("play-again");
playAgain.onclick = function (){
    window.location.reload(true);
}

// to reset game
const resetGame = document.getElementById("reset-game");
resetGame.onclick = function (){
    window.location.reload(true);
}