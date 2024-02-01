class Persons {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name:string, age:number, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

const persons1: Persons = new Persons("Tirth", 12, ["reading", "painting"]);
const persons2: Persons  = new Persons("Samrat", 15, ["coding", "sports"]);

const persons3: Persons = new Persons("Any Person", 25, ["coding", "sports"]);

console.log(persons3);