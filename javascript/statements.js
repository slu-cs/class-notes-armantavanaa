
const pi = 3.14;

let x = 0;

console.log('hiiii');


for (let i = 1; i <= 10; i++) {
  x = x + i**2
}
console.log(x);

let j = 0;
let i1 = 1;
let k = 0;
while (i1 < 1000) {
  k = i1 + j;
  j = i1;
  i1 = k;
}
console.log(i1);

for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)) {
    console.log(i);
  }
}
