
// Types and Arrays

let values = [1,2,3];

console.log(values, typeof(values));
console.log(values.length);

console.log(values.push(44)); //add new values

console.log(values, typeof(values));
console.log(values.length);

let result = [0,1];
result = values.pop(); //remove last value, captures that value
console.log(values, typeof(values));
console.log(values.length);
console.log(result);

firstRemoved = values.shift(); //remove first value, captures that value
console.log(values, typeof(values));
console.log(values.length);
console.log(firstRemoved);

values.push(4);

values.splice(1,1); //removes element at 1, and only one item to remove
console.log(values, typeof(values));
console.log(values.length);

values.splice(0,1,6,8); //removes one element starting at 0, and adds 6 and 8 to array
console.log(values, typeof(values));
console.log(values.length);


//
// Program Flow
//

let score = 100;

if (score > 1000) {
    score = score + 100;

}
else if (score === 1000) {
    console.log("Almost!");

}
else {
    console.log("Nice try!");
}
console.log("Score is: " + score);

// Switch and Case

let state = 'TX';

switch (state) {
    case 'NY':
        console.log('New York');
        break;

    case 'TX':
        console.log('Texas');
        console.log('Austin');
        //leave out break to allow fall through to default
        //break;

    default:
        console.log('Unknown');
        break;
}

// Looping with for()

for (let i=0; i < 5; i++) {
    console.log(i);
}

// Looping with while()

let count = 1;
while (count < 5) {

    console.log(count);
    count ++;
}

// Object Basics

//define properties as name-value pairs

let person = {
    name: "Jim",
    age: 32,
    partTime: false
};

console.log(person, typeof(person));
console.log(person.name);
console.log(person.age);
console.log(person.partTime);

// Passing Objects to Functions

function changeCard(card) {
    card.suit = "Clubs";
}

let card = {
    suit: "Hearts",
    value: "Queen"
};

console.log(card.suit);
console.log(card.value);

//now change card
console.log("Now changing card suit");

changeCard(card);

console.log(card.suit);
console.log(card.value);

//even after calling function, object stays updated to Clubs

// Arrays of Objects

let cards = [
    {
        suit: "Hearts",
        value: "Queen"
    },
    {
        suit: "Clubs",
        value: "King"
    }
];
console.log("Print object property from array of objects");
console.log(cards[1].suit);

// JavaScript Built-in Objects

result = Math.random(); //returns number between 0 and 1
console.log("Random number:");
console.log(result);
result = Math.random() * 52;
result = Math.trunc(result);
console.log("Random number between 0 and 52 truncated");
console.log(result);

//date function in a date object
result = new Date();
console.log("The date is:");
console.log(result);
result = new Date().toDateString();
console.log("The date in toDateString() form:");
console.log(result);

//changing case
console.log("Changing case");
result = result.toUpperCase();
console.log(result);
result = result.toLowerCase();
console.log(result);

//test for valid variables

console.log("Set result to 0/0");
result = 0/0;
console.log(result);
//function to check if NaN
console.log("Function checking if NaN:");
console.log( Number.isNaN (result));
