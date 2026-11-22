let person = {};
let ism = prompt("Ismingizni kiriting:");
person.Ism = ism;

let familiya = prompt("Familiyangizni kiriting:");
person.Familiya = familiya;

person.Email = ism.toLowerCase() + familiya.toLowerCase() + "@school.uz";
let yosh = prompt("Yoshingizni kiriting:");

person.Yosh = 2026 - Number(yosh);

let matematika = prompt("Matematika bahoingiz:");

person.Matematika = matematika;
let ingliz = prompt("Ingliz tili bahoingiz:");
person.Ingliz = ingliz;
let informatika = prompt("Informatika bahoingiz:");
person.Informatika = informatika;

let tarix = prompt("Tarix bahoingiz:");
person.Tarix = tarix;

console.log(person);