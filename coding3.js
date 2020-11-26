let dolphinsScoreOne = 97;
let dolphinsScoreTwo = 112;
let dolphinsScoreThree = 101;

let koalasScoreOne = 109;
let koalasScoreTwo = 95;
let koalasScoreThree = 106;

const averageDolphins = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
const averageKoalas = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

console.log('Dolphins', averageDolphins, 'Koalas', averageKoalas);

if (averageDolphins > averageKoalas) {
    console.log("Congratulations Dolphins! You win the game!");
} else if (averageKoalas > averageDolphins) {
    console.log("Congratulations Koalas! You win the game!");
} else if (averageDolphins === averageKoalas) {
    console.log("Both teams wins! Congrats!");
};

if (averageDolphins >= 100 && averageDolphins > averageKoalas) {
    console.log("Congratulations Dolphins! You win the game!");
} else if (averageKoalas >= 100 && averageKoalas > averageDolphins) {
    console.log("Congratulations Koalas! You win the game!");
} else if (averageDolphins >= 100 && averageKoalas >= 100 && averageDolphins === averageKoalas) {
    console.log("Both teams wins! Congrats!");
} else {
    console.log("Sorry, none team reach 100 points, so nobody wins!");
}
