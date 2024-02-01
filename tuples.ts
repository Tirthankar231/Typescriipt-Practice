type PersonInfo = readonly [string, number, boolean]

const display = (person: PersonInfo) => {
    const [name, age, hasDrivingLicense] = person
    console.log(`Name: ${name}, Age: ${age}, Driving License: ${hasDrivingLicense ? "Yes": "No"}`);
}

const pers1: PersonInfo = ["Madar", 14, false]
const pers2: PersonInfo = ["Chadar", 24, true]

display(pers1)
display(pers2)