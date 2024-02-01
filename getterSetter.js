"use strict";
class Persons2 {
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("Age is Invalid");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("Age is not defined");
        }
        return this._age;
    }
    introduceParent() {
        return `Hi I am ${this.name}. I am ${this.age} years old and my hobbies include ${this.hobbies.join(',')} etc`;
    }
}
const person1 = new Persons2("Tirth", ["coding", "chess"]);
//person1.age = 16;
console.log(person1.introduceParent());
console.log((person1.age));
