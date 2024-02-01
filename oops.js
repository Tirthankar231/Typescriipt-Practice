"use strict";
class Persons {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const persons1 = new Persons("Tirth", 12, ["reading", "painting"]);
const persons2 = new Persons("Samrat", 15, ["coding", "sports"]);
const persons3 = new Persons("Any Person", 25, ["coding", "sports"]);
console.log(persons3);
