
//objects in JS

let person = {
    firstName: "Hello",
    lastName: "What's up",
    address: {
        city: "no clue",
        state: "big place",
        country: "bigger place"
    },
    age: 18,
    pets: ["Cleo", "Obelix", "Kittius", "Zammy"]
};

console.log(person.firstName);
console.log(person.address.city);
person.pets.forEach((element) => {
    console.log(element);
});

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("favoriteFoods"));
