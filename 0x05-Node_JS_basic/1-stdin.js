// Read user input and write it to STDOUT
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (name) => {
  process.stdout.write(`Your name is: ${name.toString()}`);
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
