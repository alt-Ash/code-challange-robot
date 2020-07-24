/** What is a robot?
 *  Robot can turn - 90 degrees
 *  Robot can move - Left, Right & Forward
 *  Robot should report position
 */

exports.mapGridPosition = function (input) {
    const position = input.trim().split(' ');

    return {
        x: parseInt(position[0], 10),
        y: parseInt(position[1], 10),
        orientation: position[2]
    };
}

exports.mapInstructions = function(input) {
    return input.trim().split('');
}
