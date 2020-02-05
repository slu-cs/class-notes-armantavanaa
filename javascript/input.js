const readline = require('readline');

const user = readline.createInterface({
  input: process.stdin,
  output: process.stout
});

user.question('Filename: ', function(filename){
  console.log(filename);
});
