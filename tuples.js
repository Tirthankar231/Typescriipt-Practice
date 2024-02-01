"use strict";
const display = (person) => {
    const [name, age, hasDrivingLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driving License: ${hasDrivingLicense ? "Yes" : "No"}`);
};
const pers1 = ["Madar", 14, false];
const pers2 = ["Chadar", 24, true];
display(pers1);
display(pers2);
