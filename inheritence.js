"use strict";
class Persons1 {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi I am ${this.name} and I am ${this.age} years old. I love ${this.hobbies.join(',')}`;
    }
}
class Students extends Persons1 {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()}. I am in grade ${this.grade}`;
    }
}
const people1 = new Persons1("Tirth", 15, ["reading", "painting"]);
const people2 = new Persons1("Samrat", 14, ["coding", "sports"]);
const Student1 = new Students("New Person", 25, ["coding", "chess"], 10);
console.log(Student1.introduce());
