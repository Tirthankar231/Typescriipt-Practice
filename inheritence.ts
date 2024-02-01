class Persons1 {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name:string, age:number, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce(): string {
        return `Hi I am ${this.name} and I am ${this.age} years old. I love ${this.hobbies.join(',')}`
    }
}

class Students extends Persons1 {
    grade: number;

    constructor(name:string, age:number, hobbies: string[], grade: number){
        super(name, age, hobbies);
        this.grade = grade;
    }

    introduce(): string {
        return `${super.introduce()}. I am in grade ${this.grade}`
    }
}
const people1: Persons1 = new Persons1("Tirth", 15, ["reading", "painting"]);
const people2: Persons1  = new Persons1("Samrat", 14, ["coding", "sports"]);

const Student1: Persons1 = new Students( "New Person", 25, ["coding", "chess"], 10)

console.log(Student1.introduce());
