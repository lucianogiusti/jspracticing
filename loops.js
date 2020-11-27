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

// looping backwards

for (lei i = jonas.length - 1; i>=0; i--) {
    console.log(i, jonas[i]);
};

// loops in loops

for (let exe = 1; exe < 4; exe++) {
    console.log(`--starting exe ${exe}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exe ${exe}: lifting weight rep ${rep}`);
    }
}