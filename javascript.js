function getRandomNumber()
{
    let random = Math.floor(Math.random() * 3) + 1;
    return random;
}

function computerSelection()
{
    let numberGenerated = getRandomNumber();
    let computerChoses;
    switch(numberGenerated)
    {
        case 1:
            computerChoses = "Rock";
            break;
        case 2:
            computerChoses = "Paper";
            break;
        case 3:
            computerChoses = "Scissors"
            break;
    }
    return computerChoses;
}

function getUserChoice()    
{
    let userChoices = document.querySelectorAll(".buttons > button,.buttons > p");
    userChoices.forEach((button) => {
        button.addEventListener('click',(click) => {
            let userChooses = click.target.innerText;
            let machineSelects = computerSelection();
            score(checkWhoWin(machineSelects,userChooses));
            imageUpdater(machineSelects,userChooses);
        })
    })
}


function checkWhoWin(ComputerSelect,UserSelect){
    console.log(`The player chooses ${UserSelect}`);
    console.log(`The computer chooses ${ComputerSelect}`);
    if(ComputerSelect === UserSelect)
    {
        return "draw";
    }
    switch (UserSelect)
    {
        case "Rock":
            if(ComputerSelect === "Scissors")
            {   
                return "Win";
            }
            break;
        case "Paper":
            if(ComputerSelect === "Rock")
            {
                return "Win";
            }
            break;
        case "Scissors":
            if(ComputerSelect === "Paper")
            {
                return "Win";
            }
            break;
        }
        return "Loss";
}

function imageUpdater(computer,player) // displays images of selection of player and computer
{
    switch(player)
    {
        case "Rock":
            document.getElementById("fir").src = "images/Rock.jpg";
            break;
        case "Paper":
            document.getElementById("fir").src = "images/paper.jpg";
            break;
        case "Scissors":
            document.getElementById("fir").src = "images/scissors.jpg";
            break;
    }

    switch(computer)
    {
        case "Rock":
            document.getElementById("sec").src = "images/Rock.jpg";
            break;
        case "Paper":
            document.getElementById("sec").src = "images/paper.jpg";
            break;
        case "Scissors":
            document.getElementById("sec").src = "images/scissors.jpg";
            break;
    }

}

function score(winner){ // updates score on the scoreboard for the player and the computer
    
    const player = document.querySelector(".player");
    const computer = document.querySelector(".counter.computer");
    const draws = document.querySelector(".draw");

    if(winner === "Win")
    {   
        let wins = parseInt(player.innerText);
        wins++;
        player.innerText = wins;    //puts the int value in the html
    }
    if(winner === "Loss")
    {
        let loss = parseInt(computer.innerText);
        loss++;
        computer.innerText = loss;
    }
    if(winner === "draw")
    {
        let equal = parseInt(draws.innerText);
        equal++;
        draws.innerText = equal;
    }
}


getUserChoice();

