const jonas = [
    'Tom',
    'Riddle',
    true,
    46,
    'teacher',
    false,
]


// loop example

const years = [1991, 2000, 1969, 1995];
const ages = [];

for (let i=0; i < years.length; i++) {
    ages.push(2037 - years[i])
};

console.log(ages);

// continue and break examples
console.log('only strings');
for (let i=0; i < years.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('break with number');

for (let i=0; i < years.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}