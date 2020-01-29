
const pi = 3.14;

let x = 0;

console.log('hiiii');


for (var i = 1; i <= 10; i++) {
  x = x + i**2
}
console.log(x);

let j = 0;
let i = 1;
let k = 0;
while (i < 1000) {
  k = i + j;
  j = i;
  i = k;
}
console.log(i);
