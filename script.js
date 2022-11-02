let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// returns random number between 0-9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanG, computerG, target) => {
    const humanDifference = (target -humanG);
    const computerDifference = (target -computerG);
    return humanDifference <= computerDifference;
};

const updateScore = winner => winner === 'human' ? humanScore++: computerScore++;


const advanceRound = () => currentRoundNumber++;

const getAbsoluteDistance = (x, y) => {
    const humanDifference = (target -humanG);
    const computerDifference = (target -computerG);
    return x <= y;
};