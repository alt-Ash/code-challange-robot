console.log('Hello World');

const readline = require('readline')
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("How many bots would you like to simulate ? ", function (numberOfBots) {
    input.question("Please specify the bots Coordinates ? ", function (coordinates){
       console.log(`${numberOfBots} robot will move to ${coordinates}`)
        input.close();
    });
});