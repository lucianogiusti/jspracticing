const country = "Argentina";
const continent = "South America";
let population = 45000000;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "Español";

console.log(language);

let halfPopulation = population / 2  // 1
let plusOne = population + 1 // 2
console.log(plusOne);

let bigger = (population > 6000000);  // 3
console.log(bigger);

let averagePopulation = 33000000;
let myCountryAverage = (population > averagePopulation); // 4

let description = `${country} is in ${continent}, and its ${population} people speak ${language}`
console.log(description); // 5


