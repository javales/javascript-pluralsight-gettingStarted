// 
// Blackjack
// by JV
//

// Card Variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
    values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

// DOM Variables
let textArea = document.getElementById('text-area'), 
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

// Game Variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

// Hide Hit and Stay Buttons at start
hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function () {

    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [ getNextCard(), getNextCard() ];
    playerCards = [ getNextCard(), getNextCard() ];

    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
});

// Functions

function createDeck() {
    let deck = [];

    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valuesIdx]
            };
            deck.push(card);
            //INSTEAD OF deck.push(values[valuesIdx] + ' of ' + suits[suitIdx]);
        }
    }   
    return deck;

}

function shuffleDeck() {
    for (let i=0; i<deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}

function getCardNumericValue(card) {
    switch(card.value){
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        default:
            return 10;
    }
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for (let i=0; i<cardArray.length; i++) {
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if (card.value === 'Ace') {
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }
    return score;
}

function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function showStatus() {
    if (!gameStarted) {
        textArea.innerText = 'Welcome to Blackjack!';
        return;
    }

    let dealerCardString = '';
    for (let i=0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + '\n';
    }

    let playerCardString = '';
    for (let i=0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + '\n';
    }

    updateScores();

    textArea.innerText = 
        'Dealer has:\n' +
        dealerCardString +
        '(score: ' + dealerScore + ')\n\n' +

        'Player has:\n' +
        playerCardString +
        '(score: '+ playerScore + ')\n\n';

    if (gameOver) {
        if (playerWon) {
            textArea.innerText += "YOU WIN!";
        } 
        else {
            textArea.innerText += "DEALER WINS!";
        }
        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    }

    for (var i=0; i<deck.length; i++) {
        textArea.innerText += '\n' + getCardString(deck[i]);
    }
}

function getNextCard() {
    return deck.shift();
}


/*
let deck = createDeck();


for (let i = 0; i < deck.length; i++) {
    console.log(deck[i]);
}


let playerCards = [ getNextCard(), getNextCard() ];


console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log( " " + getCardString(playerCards[0]) );
console.log( " " + getCardString(playerCards[1]) );
//console.log(" " + playerCards[0]);
//console.log(" " + playerCards[1]);

*/
