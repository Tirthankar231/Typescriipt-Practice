//@ts-ignore
// function sum(a : number, b : number) {
//     return a+b
// }

// console.log(sum(5,25));


// function greet(name: string, id: number){
//     console.log(`Welcome ${name}, your id is ${id}`);
// }

// greet("TIRTH", 1)

const greet2 = (name: string, id?: number) => {
    return `Welcome ${name} ur id is ${id}`
}

const emp = greet2("TIRTH")
console.log(emp);


type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address: {city:string; country:string}
}

const person: Person = {
    name: "Jethalal",
    age: 45,
    isStudent: false,
    address: {
        city: "Mumbai",
        country: "India"
    }
}

const calcTotalAge = (person: Person) => {
    return person.age
}

console.log(calcTotalAge(person));

