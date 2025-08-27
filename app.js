let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    if (msg) {
        msg.innerText = "Game was Draw! Play Again";
        msg.style.backgroundColor = "gray";
    }
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        if (userScorePara) userScorePara.innerText = userScore;
        if (msg) {
            msg.innerText = `You Win!  ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        }
    } else {
        compScore++;
        if (compScorePara) compScorePara.innerText = compScore;
        if (msg) {
            msg.innerText = `You Lost. ${compChoice} beats ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    } 
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
    });


