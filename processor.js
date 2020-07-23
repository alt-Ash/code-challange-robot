const commands = {
    'L': require('./left'),
    'R': require('./right'),
    'F': require('./forward')
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

