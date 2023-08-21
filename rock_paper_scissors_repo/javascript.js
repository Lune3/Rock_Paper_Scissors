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
    let UserChoice = prompt("Rock, Paper, Scissors which one do you want to play against computer");
    UserChoice = UserChoice.toLowerCase();
    UserChoice = UserChoice.charAt(0).toUpperCase() + UserChoice.slice(1);

    if(UserChoice === "Rock" || UserChoice === "Paper" || UserChoice === "Scissors")
    {   
        return ;
    }
    
    if(UserChoice !== "Rock" || UserChoice !== "Paper" || UserChoice !== "Scissors")
    {
        let loop = true;
        while(loop)
        {
            UserChoice = prompt("Please choose between Rock, Paper, Scissors");
            UserChoice = UserChoice.charAt(0).toUpperCase() + UserChoice.slice(1);
            if(UserChoice === "Rock" || UserChoice === "Paper" || UserChoice === "Scissors")
            {
                loop = false;
            }
        }
    }
}












