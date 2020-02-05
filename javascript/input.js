const readline = require('readline');

const user = readline.creatInterface({
  input: process.stdin,
  output: process.stout
});

user.question('Filename: ', function(filename){
  console.log(Filename);
});
