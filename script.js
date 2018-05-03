let userInput = "";
let machineResultDisplay = document.getElementById("machineResult");
let gameResults = document.getElementById("gameResult");
let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissors = document.getElementById("scissors");
let humanImage = document.getElementById("humanImage");
let machineImage = document.getElementById("machineImage");

buttonRock.addEventListener("click",() => humanRock());
buttonPaper.addEventListener("click",() => humanPaper());
buttonScissors.addEventListener("click",() => humanScissors());
document.getElementById("go").addEventListener("click" , () => showResult());

function machineRockPaperScissors (){
    let turn = Math.floor(Math.random()*3);
    if (turn === 0){
        machineResultDisplay.textContent = "The Computer Chooses Rock!"
        machineImage.src = "rock.png"
        return "rock";
    }else if ( turn === 1){
        machineResultDisplay.textContent = "The Computer Chooses Paper!"
        machineImage.src = "paper.png"
        return "paper";
    }else{
        machineResultDisplay.textContent = "The Computer Chooses Scissors!"
        machineImage.src = "scissor.jpeg"
        return "scissors";
    }
}

function humanRock (){
    buttonRock.style.backgroundColor = "green";
    buttonPaper.style.backgroundColor = "white";
    buttonScissors.style.backgroundColor = "white";
    humanImage.src = "rock.png";
    return userInput = "rock";
}

function humanPaper (){
    buttonRock.style.backgroundColor = "white";
    buttonPaper.style.backgroundColor = "green";
    buttonScissors.style.backgroundColor = "white";
    humanImage.src = "paper.png";
    return userInput = "paper";
}

function humanScissors (){
    buttonRock.style.backgroundColor = "white";
    buttonPaper.style.backgroundColor = "white";
    buttonScissors.style.backgroundColor = "green";
    humanImage.src = "scissor.jpeg";
    return userInput = "scissors";
}

function humanRockPaperScissors(){
    let machineTurn = machineRockPaperScissors();
    if(machineTurn === userInput){
        return "It's A Tie!"
    }else if(userInput === "rock"){
        if(machineTurn === "scissors"){
            return "You Win!"
        }else{
            return "You Lose!"
        }
    }else if(userInput === "paper"){
        if(machineTurn === "rock"){
            return "You Win!"
        }else{
            return "You Lose!"
        }
    }else{
        if(machineTurn === "paper"){
            return "You Win!"
        }else{
            return "You Lose!"
        }
    }
}

function showResult(){
    if (userInput === ""){
        gameResults.textContent = "Click one of the other buttons first!"
        return
    }
    let result = humanRockPaperScissors();
    gameResults.textContent = result;
}