const right = require('../src/instructions/right')
const left = require('../src/instructions/left')
const forward = require('../src/instructions/forward')

const commands = {
    'R': right,
    'L': left,
    'F': forward
};

exports.process = function (state) {
    state.robotScents = [];

    for (const robot of state.robots) {
        for (const instruction of robot.instructions) {
            const command = commands[instruction];
            robot.position = command(robot.position, state.area, state.robotScents);
            if (robot.position.lost) {
                state.robotScents.push(robot.position);
                break;
            }
        }
    }

    return state;
};