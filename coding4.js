
const bill = 3000;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(tip)

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

const obj = {
    a: 1,
    b: 2,
    c: 3,
};

const obj2 = {
    ...obj,
    a: 0,
};

console.log(obj2.a, obj2.b)
