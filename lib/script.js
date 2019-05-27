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

// Hide and Stay Buttons at start
hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function () {

    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
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

function getCardString(card) {
    return card.value + " of " + card.suit;
}

function showStatus() {
    if (!gameStarted) {
        textArea.innerText = 'Welcome to Blackjack!';
        return;
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