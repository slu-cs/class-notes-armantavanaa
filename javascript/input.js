const readline = require('readline');

const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

user.question('Filename: ', function(filename){
  console.log(filename);
});


console.log('here');
