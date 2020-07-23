const readline = require('readline');
const gridMapper = require('./grid-mapper');
const processor = require('./processor');
const reporter = require('./report');


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const guideRobot = [];

reader.on('line', function (input) {
    input = input.trim();
    if (input) {
        guideRobot.push(input);
    } else {
        reader.close();
    }
});

reader.on('close', function () {
    const output = processString(guideRobot.join('\n'));
    console.log(output);
});

function processString (input) {
    let state = gridMapper.mapGrid(input);
    state = processor.process(state);
    return reporter.report(state);
}
