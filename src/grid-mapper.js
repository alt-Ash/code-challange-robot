const gridArea = require('../src/grid')
const robot = require('../src/robot')

exports.mapGrid = function (input) {
    const grid = input.split('\n');

    const gridMap = gridArea.mapGirdCoordinates(grid[0]);
    const area = {
        top: gridMap.y,
        right: gridMap.x,
        bottom: 0,
        left: 0
    };

    const robots = [];
    for (let i = 1; i < grid.length; i += 2) {
        robots.push({
            position: robot.mapGridPosition(grid[i]),
            instructions: robot.mapInstructions(grid[i + 1])
        });
    }

    return {
        area,
        robots
    };
};
