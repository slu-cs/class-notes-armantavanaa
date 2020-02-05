const readline = require('readline');

const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

user.question('Filename: ', function(filename){
  const file = readline.createInterface({
    input: fs.createReadStream(filename)
  });
});

file.on('line', function(line){
  console.log(line);
});

file.on('line', function(){
  process.exit(0);
});
