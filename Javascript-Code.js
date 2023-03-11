// Get all the name of the persons which is not a minor(age should be greater than or equal to 18).
const persons = [
    {
        "name": "Adams",
        "age": 21
    },
    {
        "name": "Scott",
        "age": 18
    },
    {
        "name": "Jim",
        "age": 5
    }
];
//Solution
let allname = persons
    .filter(elem => elem.age >= 18)
    .map(elem => elem.name);

console.log(allname); // Output: ["Adams", "Scott"]

// given data
const characters = [{ name: 'Jean-Luc Picard', age: 59 }, { name: 'Will Riker', age: 29 }, { name: 'Deanna Troi', age: 29 }];
// expexted Output: { 29: 2, 59: 1 }

// Solution
let result = {};

for (let i = 0; i < characters.length; i++) {
    let temp = characters[i].age;
    if (result[temp] === undefined) {
        result[temp] = 1;
    } else {
        result[temp] + 1;
    }
}

console.log(result);

let cars = [
    {
        model: "Kia",
        name: "forte"
    },
    {
        model: "toyota",
        name: "yaris"
    },
    {
        model: "Kia",
        name: "SAUL"
    },
    {
        model: "bmw",
        name: "x3"
    },
    {
        model: "honda",
        name: "civic"
    },
    {
        model: "Kia",
        name: "REO"
    }
];
//expected output 
//{kia:["forte","RIo","SAUl"],toyota:["yaris"],honda:["civic"]}

let newresult = {}
cars.map(elem => {
    let temp = elem.model
    if (newresult[temp] == undefined) {
        newresult[temp] = []
        newresult[temp].push(elem.name)
    }
    newresult[temp].push(elem.name)
    return;
})

