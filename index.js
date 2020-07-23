const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const input = [];
reader.on('line', function (userInput) {
    userInput = userInput.trim();
        input.push(userInput);
        reader.close();
});

reader.on('close', function (input) {
    console.log(input);
});

