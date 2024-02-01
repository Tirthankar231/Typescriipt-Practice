const userInput = (value: string | number) => {
    if(typeof value === 'number'){
        return value * 3
    } else {
        return value.toLocaleUpperCase()
    }
}

console.log((userInput(50)));
console.log((userInput("hello")));
