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
    userChoices.forEach((button) => {
        button.addEventListener('click',(click) => {
            let userChooses = click.target.innerText;
            checkWhoWin(computerSelection(),userChooses);
        })
    })
}


function checkWhoWin(ComputerSelect,UserSelect){
    console.log(`The computer chooses ${ComputerSelect}`);
    console.log(`The player chooses ${UserSelect}`);
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
    
}


getUserChoice();

// score();
