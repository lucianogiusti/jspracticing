//1

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//2

const bills = [125, 555, 44];

//3

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

//4

const totals = [bills[0] + tips [0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals)

const jonas = {
    firstName: 'Jonas',
    lastName: 'Giusti',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend 
is called ${jonas.friends[0]}.`)