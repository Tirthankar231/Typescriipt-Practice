"use strict";
const userInput = (value) => {
    if (typeof value === 'number') {
        return value * 3;
    }
    else {
        return value.toLocaleUpperCase();
    }
};
console.log((userInput(50)));
console.log((userInput("hello")));
