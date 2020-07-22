console.log('Hello World');

const prompt = require('prompt');

prompt.start();

prompt.get(['coordinate'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log(' Coordinates: ' + result.coordinate);
});

function onErr(err) {
    console.log(err);
    return 1;
}
