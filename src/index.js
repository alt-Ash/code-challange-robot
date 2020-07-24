const readline = require('readline');
const gridMapper = require('./grid-mapper');
const processor = require('./processor');
const reporter = require('./report');

const guideRobot = [];

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

reader.on('line', function (input) {
    input = input.trim();
    if (input) {
        guideRobot.push(input);
    } else {
        reader.close();
    }
});

reader.on('close', function () {
    console.log(processString(guideRobot.join('\n')));
});

function processString(input) {
    const state = processor.process(gridMapper.mapGrid(input));

    return reporter.report(state);
}

function saveReport(result) {
    const fs = require('fs');

    fs.writeFile("test-files/output/report-result", result, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}
