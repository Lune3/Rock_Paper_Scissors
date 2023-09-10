let takes = {
    user : "h",
    computer : ""
};

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

function userChoice(rock,paper)
{
    if(rock === true)
    {
        takes.user = "Rock";
    }
    else if(paper === true)
    {
        takes.user = "Paper";
    }
    else
    {
        return "Scissors";
    }
}
function getUserChoice()
{
    let userChoices = document.querySelectorAll(".buttons > button,.buttons > p");
    userChoices.forEach((choice) => {
        choice.addEventListener('click',function(){
            switch(this.className)
            {
                case "rock":
                    userChoice(true,0);
                    break;
                case "paper":
                    userChoice(0,true);
                    break;
                case "scissors":
                    userChoice(0,0);
                    break;
            }
        })
    })
}


function checkWhoWin(){
    // let ComputerSelect = computerSelection();
    // let UserSelect = getUserChoice();
    console.log(`The computer chooses ${ComputerSelect}`);
    if(ComputerSelect === UserSelect)
    {
        return "draw";
    }
    switch (UserSelect)
    {
        case "Rock":
            if(ComputerSelect == "Scissors")
            {
                return "Win";
            }
            break;
        case "Paper":
            if(ComputerSelect == "Rock")
            {
                return "Win";
            }
            break;
        case "Scissors":
            if(ComputerSelect == "Paper")
            {
                return "Win";
            }
            break;
    }
    return "Loss";
}

function score(){
    alert("Please open console to play the game");
    let result;
    let draws = 0;
    let wins = 0;
    let losses = 0;
    let loop = true;
    while(loop)
    {
        result = checkWhoWin();
        switch(result)
        {
            case "draw":
                draws++;
                break;
            case "Win":
                wins++;
                break;
            case "Loss":
                losses++;
                break;
        }
        console.log(`Wins = ${wins} Losses = ${losses} draws = ${draws}`);
        loop = confirm("Do you want to continue");
    }
    return 0;
}


getUserChoice();
console.log(takes.user);
// score();
