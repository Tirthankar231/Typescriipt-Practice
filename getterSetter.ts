class Persons2 {
    private _age: number | undefined;
    constructor(public name:string, protected hobbies: string[]) {}

    public set age(age: number){
        if(age > 150 || age < 0) {
            throw new Error("Age is Invalid")
        }
        this._age = age
    }
    public get age() {
        if(this._age === undefined){
            throw new Error("Age is not defined")
        }
        return this._age
    }
    introduceParent(): string {
        return `Hi I am ${this.name}. I am ${this.age} years old and my hobbies include ${this.hobbies.join(',')} etc`
    }
}

const person1: Persons2 = new Persons2("Tirth", ["coding", "chess"])

//person1.age = 16;
console.log(person1.introduceParent());
console.log((person1.age));

