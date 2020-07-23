const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const input = [];
reader.question('type something here\n', function (userInput) {
        input.push(userInput);
});


